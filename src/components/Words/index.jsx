import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAction, deleteAction } from '../../store/reducer/wordReducer';

export default function Words() {
  const dispatch = useDispatch();
  const words = useSelector(state => state.words);

  const submit = event =>{
    event.preventDefault();
    const {title} = event.target;
    dispatch(addAction(title.value));
    title.value = '';
  }

  const del = (word)=>{
    dispatch(deleteAction(word));
  }

  return (
    <div>
        <form onSubmit={submit}>
            <input type="text" name='title' />
            <button>Добавить</button>
        </form>
        <div>{words.map(word => <p onDoubleClick={()=>del(word)} key={word}>{word}</p>)}</div>
    </div>
  )
}

// повесить обработчик удаления слова при двойном клике





