import { useState } from "react";
import "./App.css";
import ToDoForm from "./Components/ToDoForm";
import ToDo from "./Components/ToDo";
import calender from "./Components/images/calendar.png";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoStatus, setTodoStatus] = useState("all");
  const [toggleAllComplete, setToggleAllComplete] = useState(true);

  const addTodos = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const removeAllCompleteTodos = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };

  let filteredTodos = todos;
  if (todoStatus === "active") {
    filteredTodos = todos.filter((todo) => !todo.complete);
    if (filteredTodos.length === 0) {
      setTodoStatus("all");
    }
  } else if (todoStatus === "complete") {
    filteredTodos = todos.filter((todo) => todo.complete);
    if (filteredTodos.length === 0) {
      setTodoStatus("all");
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div>
          <h1 className="header">To-do List</h1>
          <ToDoForm onSubmit={addTodos} />
        </div>
        <div className="list">
          <h2 style={{ padding: "10px 20px" }}>To do list</h2>
          {filteredTodos.length !== 0 ? (
            <table>
              <thead>
                <tr>
                  <th>List</th>
                  <th>Status</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {filteredTodos.map((todo) => (
                <ToDo
                  todo={todo}
                  key={todo.id}
                  onDelete={() => handleDelete(todo.id)}
                  isComplete={() => updateTodoStatus(todo.id)}
                />
              ))}
              <tfoot>
                <tr>
                  <td className="btns">
                    <span onClick={() => setTodoStatus("all")}>All</span>
                    <span onClick={() => setTodoStatus("active")}>Active</span>
                    <span onClick={() => setTodoStatus("complete")}>
                      Complete
                    </span>
                  </td>
                  <td>
                    {todos.some((todo) => todo.complete) ? (
                      <button
                        onClick={removeAllCompleteTodos}
                        className="remove-btn"
                      >
                        Remove all completed
                      </button>
                    ) : (
                      <button
                        onClick={removeAllCompleteTodos}
                        disabled
                        className="remove-btn"
                      >
                        Remove all completed
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className="toggle-btn"
                      onClick={() => {
                        setTodos(
                          todos.map((todo) => ({
                            ...todo,
                            complete: toggleAllComplete,
                          }))
                        );
                        setToggleAllComplete(!toggleAllComplete);
                      }}
                    >
                      Toggle all
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          ) : todoStatus !== "complete" && "active" ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h2 className="write-todo">Let's Write some To-dos Now!</h2>
              <img src={calender} alt=""  style={{width:"80%",maxWidth:300}}/>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
