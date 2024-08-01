import type { Todo as TodoType } from '../types/types';
import Todo from './Todo';
interface TodosProps {
    todos : TodoType[];
}

function Todos({ todos }: TodosProps): JSX.Element {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed': ''}`}>
                    <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}/>
                </li>
            ))}
        </ul>
    );
}

export default Todos;