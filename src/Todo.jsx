import React from "react";

export function Todo(props) {
    let name = props.name;
    return (
        <div>
            <input type="checkbox" name="todo" id={name} />
        </div>
    )
}