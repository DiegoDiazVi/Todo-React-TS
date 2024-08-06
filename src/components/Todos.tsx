import useFilters from '../hooks/useFilters';
import Todo from './Todo';

function Todos(): JSX.Element {
    const { filteredTodos } = useFilters()
    console.log(filteredTodos)
    return (
        <ul className='todo-list'>
            {filteredTodos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed': ''}`}>
                    <Todo
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                    />
                </li>
            ))}
        </ul>
    );
}

export default Todos;