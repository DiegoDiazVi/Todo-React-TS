import Todo from './Todo';
import type { Todo as TodoType } from '../types/types';

interface TodosProps {
    todos : TodoType[];
}

function Todos({ todos }: TodosProps): JSX.Element {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
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