import './TodoList.css'
import TodoItem from './TodoItem'
import { useContext, useMemo, useState } from 'react'
import { TodoStateContext } from '../TodoContext';

export default function TodoList() {
  const todos = useContext(TodoStateContext);

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
           {...todo} />
        ))
      }
    </div>
  </div>
}