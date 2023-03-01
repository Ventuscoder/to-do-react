import React from "react";
import { useState } from "react";
import { Todo } from "./Todo";

export function TodoList() {
    let [todos, setTodos] = useState([]);
    let inputRef = React.createRef();
    const onAddClick = () => setTodos((todos)=>{todos.push(inputRef.current.value)});
    
    return (
        <div>
            <div className="add-menu">
                <input type="text" placeholder="New todo" ref={inputRef} />
                <button className="add" onClick={onAddClick}>Add</button>
            </div>
            <div className="todo-list">
                {todos.map(todoName, index)=>{
                    <Todo name={todoName} key={index} />
                }}
            </div>
        </div>
    )
}