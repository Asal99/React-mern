import { useState } from "react";

function TodolistObj() {
  const [task, setTask] = useState("");
  const [todolist, setTodolist] = useState([
    { id: 1, task: "task 1", completed: false },
    { id: 2, task: "task 2", completed: true },
  ]);

  
  const [count, setCount] = useState(2);


  const addTodo = () => {
    if (task.trim() === "") {
      alert("please enter a valid task");
      return;
    }

    const newId = count + 1;

    setCount(newId);
    setTodolist((prevTodos) => [
      ...prevTodos,
      { id: newId, task, completed: false },
    ]);

    setTask("");
  };

  
  const deleteTodo = (idToDelete: number) => {
    setTodolist((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== idToDelete),
    );
  };

  return (
    <>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todolist.map((todo) => (
          <div key={todo.id} style={{ display: "flex", gap: "32px" }}>
            <li
              style={{
                textDecoration: "none",
              }}
            >
              {todo.task}
            </li>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default TodolistObj;
