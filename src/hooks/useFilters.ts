import { useContext, useState } from "react";
import { TaskContext } from "../context/TodoContext";
import { TODO_FILTERS } from "../constants/constants";
import type { FiltersValue, FiltersType } from '../types/types';

function useFilters(): FiltersType {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('TaskContext debe ser usado dentro de un TodoProvider');
    }

    const { tasks } = context;
    const [filterSelected, setFilterSeletected] = useState<FiltersValue>(TODO_FILTERS.ALL);

    const handlerFilterChange = (filter: FiltersValue): void => {
        setFilterSeletected(filter);
    }

    const filteredTodos = tasks.filter(todo => {
        switch (filterSelected) {
        case TODO_FILTERS.ACTIVE:
            return !todo.completed
        case TODO_FILTERS.COMPLETED:
            return todo.completed
        default:
            return todo
        }
    })

    const activeCount: number = tasks.filter(task => task.completed !== true).length
    const completedCount: number = tasks.filter(task => task.completed === true).length

    return { handlerFilterChange, filteredTodos, activeCount, completedCount, filterSelected }
}

export default useFilters;