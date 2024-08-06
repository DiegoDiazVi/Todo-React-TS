import { useContext } from 'react';
import { TaskContext } from '../context/TodoContext';
import type { Todo as TodoProps,  TodoId  } from '../types/types';

function Todo({ id, title, completed }: TodoProps): JSX.Element {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('TaskContext debe ser usado dentro de un TodoProvider');
    }
    const { dispatch } = context;

    /**
     * Removes a todo item from the list.
     * @param {TodoId} id - The ID of the todo item to be removed.
     */
    const onRemoveTodo = ({id}: TodoId) => {
        dispatch({
            type: 'DELETE_TASK',
            id: id
        });
    }

    /**
     * Handles the completion of a todo item.
     *
     * @param {TodoId} id - The ID of the todo item to be completed.
     */
    const onCompletedTodo = ({id}: TodoId) => {
        dispatch({
            type: 'COMPLETED_TASK',
            id: id
        })
    }

    return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={() => onCompletedTodo({id})}
            />
            <label>{title}</label>
            <button className="destroy" onClick={() => onRemoveTodo({id})}></button>
        </div>
    );
}

export default Todo;