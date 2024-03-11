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
        complete: false,
      });
      setText("");
    } else {
      e.preventDefault();
    }
  }
  return (
    <div className="form-style">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          className="input-field"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="What would you like to do ?"
        />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
