import type { Todo } from '../types/types';

interface TodosProps {
    todos : Todo[];
}


function Todos({ todos }: TodosProps): JSX.Element {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default Todos;