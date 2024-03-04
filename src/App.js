import { useState } from "react";
import "./App.css";
import ToDoForm from "./Components/ToDoForm";
import ToDo from "./Components/ToDo";

function App() {
  let [todos, setTodos] = useState([]);
  const [todoStatus, setTodoStatus] = useState("all");
  const [isComplete, setIsComplete] = useState(true);

  const addTodos = (todo) => {
    setTodos([todo, ...todos]);
  };
  const handelDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id) => {
    setTodoStatus(id);
  };
  const updateTodoStatus = (string) => {
    console.log(string);
    setIsComplete(!string)
  }
  if (todoStatus === "active") {
    todos = todos.filter((todo) => !todo.complete);
  } else if (todoStatus === "complete") {
    todos = todos.filter((todo) => todo.complete);
  }
  return (
    <div className="App">
      <ToDoForm onSubmit={addTodos} isComplete={isComplete}/>
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            onDelete={() => handelDelete(todo.id)}
            isComplete={() => updateTodoStatus(todo.isComplete)}
          />
        );
      })}
      <div>
        <button onClick={() => updateTodo("all")}>All</button>
        <button onClick={() => updateTodo("active")}>Active</button>
        <button onClick={() => updateTodo("complete")}>Complete</button>
      </div>
    </div>
  );
}

export default App;
