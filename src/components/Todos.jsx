import React from "react";
import Todo from "./Todo";
const Todos = () => {
    const todos = [
        {
            text: "Belajar react"
        },
        {
            text: "Belajar props di react"
        },
        {
            text: "Belajar looping react"
        },
        {
            text: "Belajar state react"
        },
        {
            text: "Belajar react di wegodev"
        },
        {
            text: "Belajar react"
        },
        {
            text: "Belajar props di react"
        },
        {
            text: "Belajar looping react"
        },
        {
            text: "Belajar state react"
        },
        {
            text: "Belajar react di wegodev"
        }
    ];

    return (
        <section className="todos">
          {todos.map(todo =>{
            return <Todo text = {todo.text}/>  
          })}
        </section>
    );   
};

export default Todos;