import React from "react";

function ToDo(props) {
  return (
    <tbody>
    <tr>
      <td
        onClick={props.isComplete}
        style={{ textDecoration: props.todo.complete ? "line-through" : "" ,cursor: "pointer"}}
      >
        {props.todo.text}
      </td>
      <td>{props.todo.complete ? "completed" : "pending"}</td>
      <td>
        <button onClick={props.onDelete}>X</button>
      </td>
    </tr>
    </tbody>
  );
}

export default ToDo;
