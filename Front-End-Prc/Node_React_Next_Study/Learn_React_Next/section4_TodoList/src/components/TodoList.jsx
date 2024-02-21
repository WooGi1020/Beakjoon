import './TodoList.css'
import TodoItem from './TodoItem'
import { useMemo, useState } from 'react'

export default function TodoList({ todos, onUpdate, onDelete }) {

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const filterTodos = () => {
    if(search === ""){
      return todos;
    }

    return todos.filter((todo) => 
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  }

  const {totalCount, doneCount, notDoneCount} = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return <div className="TodoList">
    <h4>Todos</h4>
    <div>
      <div>전체 할 일 : {totalCount}</div>
      <div>현재 할 일 : {doneCount}</div>
      <div>끝낸 할 일 : {notDoneCount}</div>
    </div>
    <input 
    value={search}
    onChange={onChangeSearch}
    className="TodoSearch" placeholder='검색어를 입력하세요.' />
    <div className="todos-wrapper">
      {
        filterTodos().map((todo) => (
          <TodoItem key={todo.id}
           {...todo} 
           onUpdate={onUpdate} 
           onDelete={onDelete}/>
        ))
      }
    </div>
  </div>
}