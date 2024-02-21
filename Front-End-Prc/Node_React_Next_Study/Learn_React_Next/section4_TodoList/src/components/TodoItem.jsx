import './TodoItem.css'
import { memo } from 'react';

function TodoItem(
  {id, isDone, createdDate, content, onUpdate, onDelete}
) {

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