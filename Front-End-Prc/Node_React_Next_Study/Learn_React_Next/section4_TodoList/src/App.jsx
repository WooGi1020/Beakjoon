import { useReducer, useRef, useCallback } from 'react'
import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'

function Reduser(state, action) {
  switch(action.type){
    case "CREATE" :
      return [...state, action.data];
    case "UPDATE" :
      return state.map((it) => it.id === action.data ? {...it, isDone : !it.isDone} : it)
    case "DELETE" :
      return state.filter((it) => it.id !== action.data);
  }
}

function App() {
  const [todos, dispatch] = useReducer(Reduser, []);

  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type:"CREATE",
      data:{
        id : idRef.current++,
        isDone : false,
        content,
        createdDate : new Date().getTime(),
      }
    })
  }

  const onUpdate = useCallback( (targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId
    })
  }, []);

  const onDelete = useCallback( (targetId) => {
    dispatch({
      type:"DELETE",
      data: targetId
    })
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <TodoEditor onCreate = {onCreate}></TodoEditor>
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}></TodoList>
    </div>
  )
}

export default App
