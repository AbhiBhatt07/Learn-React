import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1>This is Todo Project</h1>
      <AddTodo/>
      <TodoList/>
    </>
  );
}

export default App;
