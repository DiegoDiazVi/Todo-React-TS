import { useContext, useEffect, useState, useMemo} from "react";
import { TaskContext } from "../context/TodoContext";
import { TODO_FILTERS } from "../constants/constants";
import type { FiltersValue, FiltersType, Todo } from '../types/types';

function useFilters(): FiltersType {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('TaskContext debe ser usado dentro de un TodoProvider');
    }

    const { tasks } = context;
    const [filterSelected, setFilterSelected] = useState<FiltersValue>(TODO_FILTERS.ALL);
    const [filteredTodos, setFilteredTodos] = useState<Todo[]>(tasks);

    useEffect(() => {
        const newFilteredTodos = tasks.filter(todo => {
            switch (filterSelected) {
            case TODO_FILTERS.ACTIVE:
                return !todo.completed
            case TODO_FILTERS.COMPLETED:
                return todo.completed
            default:
                return todo
            }
        })
        setFilteredTodos(newFilteredTodos)
    }, [filterSelected, tasks])

    /**
     * Handles the change of the filter value.
     *
     * @param filter - The new filter value.
     */
    const handlerFilterChange = (filter: FiltersValue): void => {
        setFilterSelected(filter);
    }




    /**
     * The number of active tasks.
     *
     * @type {number}
     */
    const activeCount: number = useMemo(() => tasks.filter(task => task.completed !== true).length, [tasks]);

    /**
     * The number of completed tasks.
     *
     * @type {number}
     */
    const completedCount: number = useMemo(() => tasks.filter(task => task.completed === true).length, [tasks])

    return { handlerFilterChange, filteredTodos, activeCount, completedCount, filterSelected }
}

export default useFilters;