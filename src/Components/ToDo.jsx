import React from "react";
import "./style.css";
import recycle from "./images/delete.png";
function ToDo(props) {
  return (
    <tbody>
      <tr>
        <td
          onClick={props.isComplete}
          style={{
            textDecoration: props.todo.complete ? "line-through" : "",
            cursor: "pointer",
          }}
        >
          {props.todo.text}
        </td>
        <td>
          {props.todo.complete ? (
            <span className="complete-btn">Completed</span>
          ) : (
            <span className="pending-btn">Pending</span>
          )}
        </td>
        <td>
          <span onClick={props.onDelete} style={{ cursor: "pointer" }}>
            <img src={recycle} alt="" width={20} />
          </span>
        </td>
      </tr>
    </tbody>
  );
}

export default ToDo;
