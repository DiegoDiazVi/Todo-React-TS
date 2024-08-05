import { useState } from "react"
import Todos from "./components/Todos.tsx"
import type { TodoTitle, TodoId, FiltersValue } from './types/types';
import { TODO_FILTERS } from "./constants.ts";
import Footer from "./components/Footer.tsx";


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
  const [filterSelected, setFilterSeletected] = useState<FiltersValue>(TODO_FILTERS.ALL);

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

  const handlerFilterChange = (filter: FiltersValue): void => {
    setFilterSeletected(filter);
  }

  const filteredTodos = todos.filter(todo => {
    switch (filterSelected) {
      case TODO_FILTERS.ACTIVE:
        return !todo.completed
      case TODO_FILTERS.COMPLETED:
        return todo.completed
      default:
        return todo
    }
  })

  const activeCount: number = todos.filter(todo => todo.completed !== true).length
  const completedCount: number = todos.filter(todo => todo.completed === true).length

  return (
    <div className='todoapp'>
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handlerRemoveTodo}
        onAddTodo={handlerAddTodo}
        onCompletedTodo={handlerCompletedTodo}
      />
      <Footer
        completedTodo={completedCount}
        activeCount={activeCount}
        filterSelected={filterSelected}
        handlerFilterChange={handlerFilterChange}
        onClearCompleted={()=>{}}
      />
    </div>
  )
}

export default App
