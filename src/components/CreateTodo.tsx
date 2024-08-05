import { useState } from 'react';
import type { HeaderProps } from '../types/types';


function CreateTodo({ onAddTodo }: HeaderProps): JSX.Element {
    const [inputValue, setInputValue] = useState<string>('');

    const handlerChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(evt.target.value)
    }

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        onAddTodo({ title: inputValue });
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