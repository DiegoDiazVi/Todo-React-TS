/**
 * Represents the available filters for todo items.
 */
export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed',
} as const;

/**
 * Represents the filter buttons for a todo list.
 */
export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        literal: 'Todos',
        href: `/?filter=${TODO_FILTERS.ALL}`,
    },
    [TODO_FILTERS.ACTIVE]: {
        literal: 'Activos',
        href: `/?filter=${TODO_FILTERS.ACTIVE}`,
    },
    [TODO_FILTERS.COMPLETED]: {
        literal: 'Completados',
        href: `/?filter=${TODO_FILTERS.COMPLETED}`,
    },
} as const;

/**
 * Defines the action types for the tasks.
 */
export const ACTION_TYPES = {
    ADD_TASK: 'ADD_TASK',
    DELETE_TASK: 'DELETE_TASK',
    COMPLETED_TASK: 'COMPLETED_TASK',
    REMOVE_COMPLETED_TASKS: 'REMOVE_COMPLETED_TASKS'
} as const