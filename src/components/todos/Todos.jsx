import React from "react";
import PropTypes from "prop-types";
import Todo from "../todo/Todo";
import styles from "./todos.module.css";

const Todos = ({ todos, completeTodo }) => {
    return (
        <section className={ styles.todos }>
            { todos.length > 0 &&
                todos.map((todo,index) =>{
                    return <Todo 
                        text={ todo.text } 
                        key={ index }
                        isCompleted = { todo.isCompleted }
                        completeTodo= { completeTodo }
                        index = { index }
                    />  
                })
            }
            { todos.length === 0 && (
                    <p className={ styles.todoPlaceholderText }>
                        Add todo by clicking  {" "} 
                        <span className={ styles.addBtnPlaceholderText }>Add</span> button on the 
                        top left corner.
                    </p>
            )}
        </section>
    );   
};

Todos.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string
        })
    ),
    completeTodo: PropTypes.func.isRequired
}

export default Todos;