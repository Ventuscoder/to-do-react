import React from "react";
import { useState } from "react";
import { Todo } from "./Todo";

export function TodoList() {
    let [todos, setTodos] = useState([]);
    return (
        <div>
            <div className="add-menu">
                <input type="text" placeholder="New todo" />
                <button className="add">Add</button>
            </div>
            <div className="todo-list">
                <Todo name='ABC' />
            </div>
        </div>
    )
}