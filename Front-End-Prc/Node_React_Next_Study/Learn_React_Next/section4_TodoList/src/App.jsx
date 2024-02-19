import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <TodoEditor></TodoEditor>
      <TodoList></TodoList>
    </div>
  )
}

export default App
