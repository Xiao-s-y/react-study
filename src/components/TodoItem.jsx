import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleTodo } from '../store/todoSlice'

export default function TodoItem({ todo }) {
  const dispatch = useDispatch()

  const handleEdit = () => {
    const newText = prompt('请输入新的待办事项文本：', todo.text)
    if (newText !== null) {
      const trimText = newText.trim()
      if (trimText) {
        dispatch(editTodo({ id: todo.id, newText: trimText }))
      }
    }
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  return (
    <div className="todo-item">
      <div>
        <input 
          type="checkbox" 
          checked={todo.done}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span className="todo-text" style={{textDecoration: todo.done ? 'line-through' : ''}}>
          {todo.text}
        </span>
      </div>
      <div className="btn-group">
        <button className="btn-edit" onClick={handleEdit}>编辑</button>
        <button className="btn-del" onClick={handleDelete}>删除</button>
      </div>
    </div>
  )
}
