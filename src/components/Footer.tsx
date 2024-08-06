import { useContext } from 'react';
import Filters from './Filters';
import { TaskContext } from '../context/TodoContext';
import useFilters from '../hooks/useFilters';

function Footer(): JSX.Element {
    const { activeCount = 0, completedCount = 0 } = useFilters();
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('TaskContext debe ser usado dentro de un TodoProvider');
    }
    const { dispatch } = context;

    /**
     * Clears all completed tasks.
     */
    const onClearCompleted = (): void => {
        dispatch({
            type: 'REMOVE_COMPLETED_TASKS',
        });
    };

    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{activeCount}</strong> Tareas pendientes
            </span>
            <Filters />
            {
                completedCount > 0 && <button className='clear-completed' onClick={onClearCompleted}>Borrar Completados</button>
            }
        </footer>
    );
}

export default Footer;