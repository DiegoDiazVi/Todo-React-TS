import Todo from './Todo';
import type { Todo as TodoType, TodoTitle, TodoFunctionId } from '../types/types';

interface TodosProps {
    todos : TodoType[];
    onRemoveTodo: TodoFunctionId
    onAddTodo: (title: TodoTitle) => void;
    onCompletedTodo: TodoFunctionId;
}

function Todos({ todos, onRemoveTodo, onAddTodo, onCompletedTodo }: TodosProps): JSX.Element {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed': ''}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onAddTodo={onAddTodo}
                        onRemoveTodo={onRemoveTodo}
                        onCompletedTodo={onCompletedTodo}
                        />
                </li>
            ))}
        </ul>
    );
}

export default Todos;