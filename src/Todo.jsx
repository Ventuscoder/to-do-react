import React from "react";

export function Todo(props) {
    let name = props.name;
    return (
        <div>
            <input type="checkbox" name={name} id={name} />
            <label htmlFor={name}>{name}</label><br />
        </div>
    )
}