import { useContext, createContext } from "react";

/*  So createContext ka use karke hum pehle to context banayenge
    and then usme context kya hain vo likhenge
    Then we make a hook for export and return using usecontext,
    and remember useContext ka ager use karte 
    hain to use context dena is nessesary okay 

    like this :     
          retrun useContext(TodoContext)
*/

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Massage",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;

/* And in last we make export and make a context Provider 

l   ike This:
         export  const  TodoProvider = TodoContext.Provider
*/
