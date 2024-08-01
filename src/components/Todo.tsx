import type { Todo as TodoType } from '../types/types';

type TodoProps = TodoType

function Todo({ id, title, completed }: TodoProps): JSX.Element {
    return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onClick={() => console.log('clicked')}
            />
            <label>{title}</label>
            <button className="destroy" onClick={() => console.log('clicked')}></button>
        </div>
    );
}

export default Todo;