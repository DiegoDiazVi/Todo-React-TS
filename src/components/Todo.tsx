import type { Todo as TodoType, TodoTitle, TodoId  } from '../types/types';
interface TodoProps extends TodoType {
    onRemoveTodo: ({ id }: TodoId) => void;
    onAddTodo: ({ title }: TodoTitle) => void;
    onCompletedTodo: ({ id }: TodoId) => void;
}


function Todo({ id, title, completed, onRemoveTodo, onAddTodo, onCompletedTodo }: TodoProps): JSX.Element {
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