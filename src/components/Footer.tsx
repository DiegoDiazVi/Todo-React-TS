import type { Todo as TodoType } from '../types/types';

interface FooterProps {
    todos: TodoType[];
}

function Footer({ todos, activeCount, onClearCompleted }: FooterProps): JSX.Element {
    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{todos.length}</strong> Tareas pendientes
            </span>
            <Filters
                filtersSelected={}
                onFilterChange={}
            />
        </footer>
    );
}

export default Footer;