import type { HeaderProps } from "../types/types";
import CreateTodo from "./CreateTodo";

function Header({ onAddTodo }: HeaderProps): JSX.Element {
    return (
        <header className='header'>
            <h1>Todo
                <img
                    style={{width: '60px', height: 'auto'}}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                    alt="TypeScript logo"
                />
            </h1>
            <CreateTodo onAddTodo={onAddTodo}/>
        </header>
    );
}

export default Header;