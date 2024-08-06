import { ACTION_TYPES } from "../constants/constants";
import { Todo } from "../types/types";

interface ActionType {
    type: typeof ACTION_TYPES[keyof typeof ACTION_TYPES];
    id?: string;
    title?: string;
}

export function taskReducer(tasks: Todo[], action: ActionType): Todo[] {
    const { type, id, title } = action;

    switch (type) {
        case ACTION_TYPES.ADD_TASK:
            if (!title) throw new Error('Title is required for ADD_TASK action');
            return [...tasks, {
                id: String(tasks.length + 1),
                title,
                completed: false,
            }];

        case ACTION_TYPES.DELETE_TASK:
            if (!id) throw new Error('ID is required for DELETE_TASK action');
            return tasks.filter(task => task.id !== id);

        case ACTION_TYPES.COMPLETED_TASK:
            if (!id) throw new Error('ID is required for COMPLETED_TASK action');
            return tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            );

        case ACTION_TYPES.REMOVE_COMPLETED_TASKS:
            return tasks.filter(task => !task.completed);

        default:
            throw new Error(`Action type "${type}" is not defined`);
    }
}
