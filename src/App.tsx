import { useReducer, useState } from "react"
import Todos from "./components/Todos.tsx"
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";

import type { TodoTitle, TodoId, FiltersValue } from './types/types';
import { TODO_FILTERS } from "./constants/constants.ts";
import { mockTodos } from "./mocks/todos.ts";
import { taskReducer } from "./reducers/taskReducer.ts";

function App(): JSX.Element {
  const [tasks, dispatch] = useReducer(taskReducer , mockTodos)
  const [filterSelected, setFilterSeletected] = useState<FiltersValue>(TODO_FILTERS.ALL);

  const handlerAddTodo = ({ title }: TodoTitle): void => {
    dispatch({
      type: 'ADD_TASK',
      title: title
    })
  }

  const handlerRemoveTodo = ({ id }: TodoId): void => {
    dispatch({
      type: 'DELETE_TASK',
      id: id
    });
  }

  const handlerCompletedTodo = ({ id }: TodoId): void => {
    dispatch({
      type: 'COMPLETED_TASK',
      id: id
    })
  }

  const handlerFilterChange = (filter: FiltersValue): void => {
    setFilterSeletected(filter);
  }

  const filteredTodos = tasks.filter(todo => {
    switch (filterSelected) {
      case TODO_FILTERS.ACTIVE:
        return !todo.completed
      case TODO_FILTERS.COMPLETED:
        return todo.completed
      default:
        return todo
    }
  })

  const activeCount: number = tasks.filter(task => task.completed !== true).length
  const completedCount: number = tasks.filter(task => task.completed === true).length

  const handlerRemoveAllCompleted = (): void  => {
    dispatch({
      type: 'REMOVE_COMPLETED_TASKS',
    })
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handlerAddTodo}/>
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handlerRemoveTodo}
        onCompletedTodo={handlerCompletedTodo}
      />
      <Footer
        completedTodo={completedCount}
        activeCount={activeCount}
        filterSelected={filterSelected}
        handlerFilterChange={handlerFilterChange}
        onClearCompleted={handlerRemoveAllCompleted}
      />
    </div>
  )
}

export default App
