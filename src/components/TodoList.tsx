import React, { useContext } from "react";
import { Todo } from "../models/Todo";
import TodoListItem from "./TodoListItem";
import { TodoContextType } from "../contexts/TodoContextType";
import {TodoContext} from "../contexts/TodoContext";

const TodoList = () => {
    const {todos} = useContext<TodoContextType>(TodoContext);
    return (
        <>
            <p className="uk-text-center uk-text-primary uk-text-large">Lista de Tarefas</p>
            <table className="uk-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tarefas</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos?.map(
                            todo => (<TodoListItem key={todo.id} todo={todo}/>)
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default TodoList