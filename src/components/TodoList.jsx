import TodoItem from './TodoItem'
import { useSelector,useDispatch } from 'react-redux'
import { clearDoneTodos, changeFilter } from '../store/todoSlice'
export default function TodoList() {
  const todos= useSelector(state => state.todos.todoList)
  const filter = useSelector(state => state.todos.filter)
  const dispatch = useDispatch()
  const handleClearDone = () => {
    dispatch(clearDoneTodos())
  }
  const handleFilterChange = (newFilter) => {
    dispatch(changeFilter(newFilter))
  }

  // 根据filter过滤出要展示的列表 ======
  let showList
  if (filter === 'all') {
    showList = todos
  } else if (filter === 'undone') {
    showList = todos.filter(function(item) {
      return !item.done
    })
  } else if (filter === 'done') {
    showList = todos.filter(function(item) {
      return item.done
    })
  }

  return (
    <>
      <div className="filter-bar">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>全部</button>
        <button className={filter === 'undone' ? 'active' : ''} onClick={() => handleFilterChange('undone')}>未完成</button>
        <button className={filter === 'done' ? 'active' : ''} onClick={() => handleFilterChange('done')}>已完成</button>
      </div>
      <div className="todo-list">
        {showList.map((item) => {
          return <TodoItem key={item.id} todo={item} />;
        })}
      </div>
      <div className="footer-info">
        <span>已完成 {todos.filter(t => t.done).length} / 共 {todos.length} 条</span>
        <button className="clear-done" onClick={handleClearDone}>清空已完成</button>
      </div>
    </>
  )
}
