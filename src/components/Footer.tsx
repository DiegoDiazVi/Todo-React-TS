import { useContext } from 'react';
import type { FiltersValue } from '../types/types';
import Filters from './Filters';
import { TaskContext } from '../context/TodoContext';

interface FooterProps {
    activeCount: number,
    completedTodo: number,
    filterSelected: FiltersValue,
    handlerFilterChange: (filter: FiltersValue) => void,
}

function Footer({ completedTodo = 0, activeCount = 0, filterSelected, handlerFilterChange }: FooterProps): JSX.Element {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('TaskContext debe ser usado dentro de un TodoProvider');
    }
    const { dispatch } = context;

    const onClearCompleted = ():void => {
        dispatch({
            type: 'REMOVE_COMPLETED_TASKS',
        })
    }
    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{activeCount}</strong> Tareas pendientes
            </span>
            <Filters
                filtersSelected={filterSelected}
                onFilterChange={handlerFilterChange}
            />
            {
                completedTodo > 0 && <button className='clear-completed' onClick={onClearCompleted}>Borrar Completados</button>
            }
        </footer>
    );
}

export default Footer;