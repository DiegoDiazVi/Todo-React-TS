import { createContext, ReactNode, useReducer, Dispatch, useState, useEffect } from "react";
import { mockTodos } from "../mocks/todos";
import { taskReducer } from "../reducers/taskReducer";
import type { Todo, ActionType, FiltersValue } from '../types/types';
import { TODO_FILTERS } from "../constants/constants";

interface TaskContextType {
    tasks: Todo[],
    dispatch: Dispatch<ActionType>,
    filteredTodos: Todo[],
    activeCount: number,
    completedCount: number,
    filterSelected: FiltersValue;
    setFilterSelected: (filter: FiltersValue) => void;
}

export const TaskContext = createContext<TaskContextType|null>(null);
interface TodoProviderProps {
    children: ReactNode
}

function TodoProvider({ children }: TodoProviderProps): JSX.Element {
    const [tasks, dispatch] = useReducer(taskReducer , mockTodos);
    const [filterSelected, setFilterSelected] = useState<FiltersValue>(TODO_FILTERS.ALL);
    const [filteredTodos, setFilteredTodos] = useState<Todo[]>(tasks);

    useEffect(() => {
        const newFilteredTodos = tasks.filter(todo => {
            switch (filterSelected) {
                case TODO_FILTERS.ACTIVE:
                    return !todo.completed;
                case TODO_FILTERS.COMPLETED:
                    return todo.completed;
                default:
                    return todo;
            }
        });
        setFilteredTodos(newFilteredTodos);
    }, [filterSelected, tasks]);

    const activeCount = tasks.filter(todo => !todo.completed).length;
    const completedCount = tasks.filter(todo => todo.completed).length

    return (
        <TaskContext.Provider value={{tasks, dispatch, setFilterSelected, filteredTodos, filterSelected, activeCount, completedCount }}>
            { children }
        </TaskContext.Provider>
    );
}

export default TodoProvider;