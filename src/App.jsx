import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TodoList from './TodoList'
import DateHours from './components/DateHours'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='flex'>
  <React.StrictMode>
  <DateHours/>
  <TodoList/>    
  </React.StrictMode>,
  </div>
)
