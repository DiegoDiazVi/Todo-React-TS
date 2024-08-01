import { useState } from "react"
import Todos from "./components/Todos.tsx"

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

  const handlerRemoveTodo = (id: string): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className='todoapp'>
      <Todos todos={todos} onRemoveTodo={handlerRemoveTodo} />
    </div>
  )
}

export default App
