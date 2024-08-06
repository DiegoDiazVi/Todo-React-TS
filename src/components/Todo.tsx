import { useContext } from 'react';
import { TaskContext } from '../context/TodoContext';
import type { Todo as TodoProps,  TodoId  } from '../types/types';

function Todo({ id, title, completed }: TodoProps): JSX.Element {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('TaskContext debe ser usado dentro de un TodoProvider');
    }
    const { dispatch } = context;

    const onRemoveTodo = ({id}: TodoId) => {
        dispatch({
            type: 'DELETE_TASK',
            id: id
        });
    }

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
                onClick={() => onCompletedTodo({id})}
            />
            <label>{title}</label>
            <button className="destroy" onClick={() => onRemoveTodo({id})}></button>
        </div>
    );
}

export default Todo;