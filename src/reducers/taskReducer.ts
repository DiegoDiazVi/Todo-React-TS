import { ACTION_TYPES } from "../constants/constants";
import { Todo } from "../types/types";

interface ActionType {
    type: typeof ACTION_TYPES[keyof typeof ACTION_TYPES];
    id?: string
    title?: string
}

export function taskReducer(tasks: Todo[], action: ActionType): Todo[] {
    switch (action.type) {
        case ACTION_TYPES.ADD_TASK :
            return [...tasks, {
                id: String(tasks.length + 1),
                title: action.title,
                completed: false,
            }]
        case ACTION_TYPES.DELETE_TASK:
            return tasks.filter(tasks => tasks.id !== action.id);
        case ACTION_TYPES.COMPLETED_TASK: {
            return tasks.map( task => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            })
        }
        case ACTION_TYPES.REMOVE_COMPLETED_TASKS:
            return tasks.filter(task => !task.completed)
        default:
            throw new Error('Action not defined');
    }
}