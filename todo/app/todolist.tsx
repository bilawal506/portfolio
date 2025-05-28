"use client";
import { useEffect, useState } from "react";
import './todostyle.css';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  // Handle GET on mount
  useEffect(() => {
    fetch("http://127.0.0.1:8000/todos", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "ngrok-skip-browser-warning": "Y",
      },
    })
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error(err));
  }, []);

  // Handle POST on form submit
  function handleSubmit() {
    if (value){
    fetch("http://127.0.0.1:8000/todos/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "ngrok-skip-browser-warning": "Y",
      },
      body: JSON.stringify({
        name: value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos((prev) => [...prev, data]);
        setValue(""); // Clear input after successful submit
      })
      .catch((err) => console.error(err));
  }
  else {alert("Empty Input")}
}
function handleDelete(id:any) {
  fetch(`http://127.0.0.1:8000/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "ngrok-skip-browser-warning": "Y",
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to delete");
      // Remove the deleted todo from the local state
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    })
    .catch((err) => console.error(err));
}


  return (
    <>
      <div className="List">
        <h1>Todo List</h1>
        <ul style={{ listStyle: "Circle" }}>
          {todos.map((todo) => (
            <li key={todo.id} onClick={()=>{handleDelete(todo.id)}} style={{cursor:"pointer"}}>{todo.name}</li>
          ))}
        </ul> 
      </div>
      <div className="Input">
        <input
          type="text"
          placeholder="enter your task..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
