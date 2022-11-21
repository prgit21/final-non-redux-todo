import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Form from "./components/form";
import TodoLs from "./components/TodoLs";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            setInput={setInput}
          />
        </div>
        <div>
          <TodoLs todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
