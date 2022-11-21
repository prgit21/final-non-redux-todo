import React from "react";
import "./todols.css";

const TodoLs = ({ todos, setTodos, setEditTodo }) => {
  const handleDel = ({ id }) => {
    //check id why again and why todo on onClick
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleComplete = (todo) => {
    console.log("complete", todo);
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  console.log(todos);
  const handleEdit = ({ id }) => {
    console.log();
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="todo-li" key={todo.id}>
          <text className={todo.completed ? "strikethrough" : "regular"}>
            {todo.title}
          </text>
          {/* <input
            type="text"
            value={todo.title}
            className={"list $(todo.completed ? 'complete': '')"}
            onChange={(event) => event.preventDefault()}
          /> */}
          <div>
            <button
              className="complete-task"
              onClick={() => handleComplete(todo)}
            >
              comp
            </button>
            <button className="edit" onClick={() => handleEdit(todo)}>
              {" "}
              ✍️
            </button>
            <button className="delete" onClick={() => handleDel(todo)}>
              {" "}
              🗑️{" "}
            </button>
          </div>
        </li>
      ))}
    </div> //learn again how to use map
  );
};

export default TodoLs;
