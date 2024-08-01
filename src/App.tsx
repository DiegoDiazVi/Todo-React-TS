import { useState } from "react"
import Todos from "./components/Todos.tsx"
import type { TodoTitle, TodoId } from './types/types';


const mockTodos = [
  {
    id: '1',
    title: 'Learn TypeScript',
    completed: true,
  },
  {
    id: '2',
    title: 'Learn React',
    completed: false,
  },
  {
    id: '3',
    title: 'Learn Node.js',
    completed: false,
  },
]

function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)

  const handlerAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: String(todos.length + 1),
      title,
      completed: false,
    }
    setTodos(prevState => [...prevState, newTodo]);
  }

  const handlerRemoveTodo = ({ id }: TodoId): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handlerCompletedTodo = ({ id }: TodoId): void => {
    const newTodos = todos.map( todo => {
      if( todo.id ===id ) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(newTodos);
  }

  return (
    <div className='todoapp'>
      <Todos
        todos={todos}
        onRemoveTodo={handlerRemoveTodo}
        onAddTodo={handlerAddTodo}
        onCompletedTodo={handlerCompletedTodo}
      />
    </div>
  )
}

export default App
