import { createContext, ReactNode, useReducer, Dispatch } from "react";
import { mockTodos } from "../mocks/todos";
import { taskReducer } from "../reducers/taskReducer";
import type { Todo, ActionType } from '../types/types';


export const TaskContext = createContext<TaskContextType|null>(null);

interface TaskContextType {
    tasks: Todo[];
    dispatch: Dispatch<ActionType>;
}

interface TodoProviderProps {
    children: ReactNode
}

function TodoProvider({ children }: TodoProviderProps): JSX.Element {
    const [tasks, dispatch] = useReducer(taskReducer , mockTodos);
    return (
        <TaskContext.Provider value={{tasks, dispatch}}>
            { children }
        </TaskContext.Provider>
    );
}

export default TodoProvider;