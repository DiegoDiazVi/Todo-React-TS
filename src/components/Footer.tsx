import type { FiltersValue } from '../types/types';
import Filters from './Filters';

interface FooterProps {
    activeCount: number,
    completedTodo: number,
    filterSelected: FiltersValue,
    handlerFilterChange: (filter: FiltersValue) => void,
    onClearCompleted: () => void,
}

function Footer({ completedTodo = 0, activeCount = 0, filterSelected, onClearCompleted, handlerFilterChange }: FooterProps): JSX.Element {
    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{activeCount}</strong> Tareas pendientes
            </span>
            <Filters
                filtersSelected={filterSelected}
                onFilterChange={handlerFilterChange}
            />
        </footer>
    );
}

export default Footer;