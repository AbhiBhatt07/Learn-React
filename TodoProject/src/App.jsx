import { useEffect, useState } from "react";
import "./App.css";
import { TodoContextProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((previous) => [{ id: Date.now(), ...todo }, ...previous]);

    /* ...previous mean take previous values and spred all values matlab yai hame purani sari values
  de dega 
  we don't write todo like this because we make todos so we can use
  this => { id: Date.now(), ...todo } 

  */
  };

  const updateTodo = (todo, id) => {
    setTodos((previous) =>
      previous.map((previousTodo) =>
        previousTodo.id === id ? todo : previousTodo
      )
    );
    /*  Here previousToto is a Object */
  };

  const deleteTodo = (id) => {
    setTodos((previous) => previous.filter((eachTodo) => eachTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((previous) =>
      previous.map((previousTodo) =>
        previousTodo.id === id
          ? { ...previousTodo, completed: !previousTodo.completed }
          : previousTodo
      )
    )
  };

  // useEffect(() => {
  //   const stordTodos = JSON.parse(localStorage.getItem("todos"));
  //   if (todos && todos.length > 0) {
  //     setTodos(todos);
  //   }
    
  // },[]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const todos = JSON.parse(storedTodos);
      if (todos && todos.length > 0) {
        setTodos(todos);
      }
    }
  }, []);
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm/>
            {/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className=" w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
