import { useContext, createContext } from "react";


export const todoContext = createContext ({
todos: [
    {
        id: "1",
        todoMessage: "Message",
        complete: false,
    } 
    
],
AddTodo: (todo) => { },
UpdateTodo: (id, todo) => {},
DeleteTodo: (id) => { },
toggleComplete: (todo) => { }

})

export const  UseTodo = () => {
   return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider ;