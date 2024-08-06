import Todos from "./components/Todos.tsx"
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import TodoProvider from "./context/TodoContext.tsx";


function App(): JSX.Element {
  return (
    <TodoProvider>
      <div className='todoapp'>
          <Header />
          <Todos />
          <Footer />
      </div>
    </TodoProvider>
  )
}

export default App
