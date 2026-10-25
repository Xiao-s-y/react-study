import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function Home() {
  return (
    <div className="app-wrap">
      <h1>Todo 待办管理</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}
export default App
