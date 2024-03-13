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
            maxWidth: "300px",
            padding: 5,
            borderBottom: "1px solid #eee",
            overflowWrap: "anywhere",
          }}
        >
          {props.todo.text}
        </td>
        <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>
          {props.todo.complete ? (
            <span className="complete-btn">Completed</span>
          ) : (
            <span className="pending-btn">Pending</span>
          )}
        </td>
        <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>
          <span onClick={props.onDelete} style={{ cursor: "pointer" }}>
            <img src={recycle} alt="" width={20} />
          </span>
        </td>
      </tr>
    </tbody>
  );
}

export default ToDo;
