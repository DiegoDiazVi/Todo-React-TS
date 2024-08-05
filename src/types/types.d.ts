import { TODO_FILTERS } from '../constants';
export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export type TodoId = Pick<Todo, 'id'>;
export type TodoTitle = Pick<Todo, 'title'>;
export type TodoCompleted = Pick<Todo, 'completed'>;
export type TodoFunctionId = (id: TodoId) => void;
export type FiltersValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];

export interface HeaderProps {
    onAddTodo: ({ title }: TodoTitle) => void
}