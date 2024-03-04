import React, { useState } from "react";
import shortid from "shortid";
import "./style.css";
function ToDoForm(props) {
  const [text, setText] = useState("");
  function handelSubmit(e) {
    if (text !== "") {
      e.preventDefault();
      props.onSubmit({
        id: shortid.generate(),
        text: text,
        complete: props.isComplete,
      });
      setText("");
    } else {
      e.preventDefault();
    }
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          className="input-field"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button className="add-btn" type="submit">
          Add To do
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
