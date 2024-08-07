import { useContext } from "react";
import { TaskContext } from "../context/TodoContext";
import type { FiltersValue, FiltersType} from '../types/types';

interface FiltersFunctionType extends FiltersType {
    handlerFilterChange: (filter: FiltersValue) => void,
}

function useFilters(): FiltersFunctionType {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('TaskContext debe ser usado dentro de un TodoProvider');
    }

    const { filteredTodos, filterSelected, activeCount, completedCount, setFilterSelected } = context;

    const handlerFilterChange = (filter: FiltersValue): void => {
        setFilterSelected(filter);
    }

    return { handlerFilterChange, filteredTodos, activeCount, completedCount, filterSelected }
}

export default useFilters;