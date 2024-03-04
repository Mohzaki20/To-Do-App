import React from "react";

function ToDo(props) {
    console.log();
  return (
    <>
      <div
        onClick={props.isComplete}
        style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
      >
        {props.todo.text}
      </div>
      <button onClick={props.onDelete}>X</button>
    </>
  );
}

export default ToDo;
