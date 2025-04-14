import React, { createContext } from "react";
import { TodoContextType } from "./TodoContextType";
import { title } from "process";
import { Todo } from "../models/Todo";


export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
    toggle:() => {},
});

const TodoProvider = (props: any) => { 
    
    const todos = [ 
        {id: 1, title: 'Ir ao supermercado', done: true},
        {id: 2, title: 'Ir à academia', done: false}
    ];

    const addTodo = (title:string) => {console.log('Adicionou ' + title)}

    const removeTodo = (todo: Todo) => {console.log('Removey ' + todo.title)}

    const toggle = (todo: Todo) => {console.log('Alterou ' + todo.title)}

    return(
        <TodoContext.Provider value ={{todos, addTodo, removeTodo, toggle}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider