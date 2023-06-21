import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TodoList from './TodoList'
import DateHours from './components/DateHours'
import Backgrounds from './components/Backgrounds'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='flex'>
  <React.StrictMode>
  
  <DateHours/>
  <TodoList/> 
  <Backgrounds/>
     
  </React.StrictMode>,
  </div>
)
