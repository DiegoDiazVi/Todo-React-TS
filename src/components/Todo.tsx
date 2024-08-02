import type { Todo as TodoType, TodoTitle, TodoFunctionId  } from '../types/types';
interface TodoProps extends TodoType {
    onRemoveTodo: TodoFunctionId
    onAddTodo: ({ title }: TodoTitle) => void;
    onCompletedTodo: TodoFunctionId
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