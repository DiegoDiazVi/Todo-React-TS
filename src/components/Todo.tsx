import type { Todo as TodoType } from '../types/types';

interface TodoProps extends TodoType {
    onRemoveTodo: (id: string) => void;
}


function Todo({ id, title, completed, onRemoveTodo }: TodoProps): JSX.Element {
    return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onClick={() => console.log('clicked')}
            />
            <label>{title}</label>
            <button className="destroy" onClick={() => onRemoveTodo(id)}></button>
        </div>
    );
}

export default Todo;