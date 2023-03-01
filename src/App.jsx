import React from 'react';
import './App.css'
import {TodoList} from "./TodoList";

export default function App() {
  return (
    <div className='container-fluid'>
      To-do App
      <TodoList />
    </div>
  )
}