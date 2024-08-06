import Todos from "./components/Todos.tsx"
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import useFilters from "./hooks/useFilters.ts";

function App(): JSX.Element {
  const { handlerFilterChange, filteredTodos, activeCount, completedCount, filterSelected } = useFilters();
  return (
    <div className='todoapp'>
        <Header/>
        <Todos
          todos={filteredTodos}
        />
        <Footer
          completedTodo={completedCount}
          activeCount={activeCount}
          filterSelected={filterSelected}
          handlerFilterChange={handlerFilterChange}
        />
    </div>
  )
}

export default App
