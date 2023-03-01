import React from "react";
import { useState } from "react";

export function TodoList() {
    [todos, setTodos] = useState([]);
    return (
        <div>
            <div className="add-menu">
                <input type="text" placeholder="New todo" />
                <button className="add">Add</button>
            </div>
            <div className="todo-list">
            </div>
        </div>
    )
}