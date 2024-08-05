import Todo from './Todo';
import type { Todo as TodoType, TodoFunctionId } from '../types/types';

interface TodosProps {
    todos : TodoType[];
    onRemoveTodo: TodoFunctionId
    onCompletedTodo: TodoFunctionId;
}

function Todos({ todos, onRemoveTodo, onCompletedTodo }: TodosProps): JSX.Element {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed': ''}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onCompletedTodo={onCompletedTodo}
                        />
                </li>
            ))}
        </ul>
    );
}

export default Todos;