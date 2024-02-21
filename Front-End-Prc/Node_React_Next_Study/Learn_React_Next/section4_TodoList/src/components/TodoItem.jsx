import './TodoItem.css'
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../TodoContext';

function TodoItem(
  {id, isDone, createdDate, content}
) {
  const {onDelete, onUpdate} = useContext(TodoDispatchContext);

  const onChangeCheck = () => {
    onUpdate(id);
  }

  const onClickDeleteBtn = () => {
    onDelete(id);
  }

  const addClassName = isDone ? 'checked' : '';

  return <div className="TodoItem">
    <input onChange={onChangeCheck} type="checkbox" checked={isDone}/>
    <div className={`content ${addClassName}`}>{content}
      </div>
    <div className='date'>{new Date(createdDate).toLocaleDateString()}</div>
    <button onClick={onClickDeleteBtn}>삭제</button>
  </div>
}

export default memo(TodoItem);