import { useState } from "react";
import "./App.css";
import ToDoForm from "./Components/ToDoForm";
import ToDo from "./Components/ToDo";

function App() {
  let [todos, setTodos] = useState([]);
  const [todoStatus, setTodoStatus] = useState("all");
  const [toggleAllComplete, setToggleAllComplete] = useState(true);

  const addTodos = (todo) => {
    setTodos([todo, ...todos]);
  };
  const handelDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      })
    );
  };
  const removeAllCompleteTodos = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };
  if (todoStatus === "active") {
    todos = todos.filter((todo) => !todo.complete);
  } else if (todoStatus === "complete") {
    todos = todos.filter((todo) => todo.complete);
  }
  return (
    <div className="App">
      <div className="container">
        <div>
          <h1 className="header">To-do List</h1>
          <ToDoForm onSubmit={addTodos} />
        </div>
        <div className="list">
          <h3 style={{ margin: 15 }}>To do list</h3>
          <table>
            <thead>
              <tr>
                <th>List</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>

            {todos.map((todo) => {
              return (
                <ToDo
                  todo={todo}
                  key={todo.id}
                  onDelete={() => handelDelete(todo.id)}
                  isComplete={() => updateTodoStatus(todo.id)}
                />
              );
            })}

            <tr>

              <span onClick={() => setTodoStatus("all")}>All</span>
              <span onClick={() => setTodoStatus("active")}>Active</span>
              <span onClick={() => setTodoStatus("complete")}>Complete</span>
              {todos.some((todo) => todo.complete) ? (
                <button onClick={removeAllCompleteTodos}>
                  Remove all complete Todos{" "}
                </button>
              ) : null}
              <button
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
                Toggle all complete : {`${toggleAllComplete}`}{" "}
              </button>

            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
