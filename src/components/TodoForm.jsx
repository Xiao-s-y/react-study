import { useRef } from 'react';
import { useDispatch } from 'react-redux'
import {nanoid} from 'nanoid'
import { addTodo } from '../store/todoSlice'
export default function TodoForm() {
  // 1. ref定义在组件顶层
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const handleAdd = () => {
      //获取输入框的值
      const todoText = inputRef.current.value.trim();
      if (!todoText) return; // 空白不添加
      //传对象
      dispatch(addTodo({
        id: nanoid(),
        text: todoText,
        done: false
      }));
      inputRef.current.value = '';
  }
  return (
    <div className="input-row">
      <input type="text" placeholder="输入新任务..."  ref={inputRef} />
      <button onClick={handleAdd}>添加</button>
    </div>
  )
}

