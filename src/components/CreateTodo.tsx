import { useContext, useState } from 'react';
import { TaskContext } from '../context/TodoContext';

function CreateTodo(): JSX.Element {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('TaskContext debe ser usado dentro de un TodoProvider');
    }
    const { dispatch } = context;
    const [inputValue, setInputValue] = useState<string>('');

    const handlerChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(evt.target.value)
    }

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        dispatch({
            type: 'ADD_TASK',
            title: inputValue
        })
        setInputValue('');
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input
                className='new-todo'
                value={inputValue}
                onChange={(evt) => handlerChange(evt)}
                placeholder='¿Qué quieres hacer?'
            />
        </form>
    );
}

export default CreateTodo;