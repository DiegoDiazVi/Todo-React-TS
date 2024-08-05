import Filters from './Filters';

interface FooterProps {
    completedTodo: number
    activeCount: number,
    onClearCompleted: () => void
}

function Footer({ completedTodo = 0, activeCount = 0, onClearCompleted }: FooterProps): JSX.Element {
    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{activeCount}</strong> Tareas pendientes
            </span>
            <Filters
                filtersSelected={}
                onFilterChange={}
            />
        </footer>
    );
}

export default Footer;