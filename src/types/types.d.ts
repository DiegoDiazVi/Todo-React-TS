import { TODO_FILTERS } from '../constants/constants';
export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export type TodoId = Pick<Todo, 'id'>;
export type FiltersValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];

export interface ActionType {
    type: typeof ACTION_TYPES[keyof typeof ACTION_TYPES];
    id?: string;
    title?: string;
}

export interface FiltersType {
    activeCount: number,
    completedCount: number,
    filteredTodos: Todo[],
    filterSelected: FiltersValue,
}
