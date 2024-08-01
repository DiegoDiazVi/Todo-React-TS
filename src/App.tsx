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
  return (
    <>
      <Todos todos={todos} />
    </>
  )
}

export default App
