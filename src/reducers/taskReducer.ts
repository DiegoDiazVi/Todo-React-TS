import { ACTION_TYPES } from "../constants/constants";
import { Todo, ActionType } from "../types/types";

/**
 * Reducer function for managing the state of tasks in a Todo application.
 * @param tasks - The array of tasks.
 * @param action - The action object that describes the type of action and any additional data.
 * @returns The updated array of tasks.
 * @throws {Error} If the action type is not defined or if required data is missing.
 */
export function taskReducer(tasks: Todo[], action: ActionType): Todo[] {
    const { type, id, title } = action;

    switch (type) {
        case ACTION_TYPES.ADD_TASK:
            if (!title) throw new Error('Title is required for ADD_TASK action');
            return [...tasks, {
                id: crypto.randomUUID(),
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
