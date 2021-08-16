import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
const Todos = ({ todos, completeTodo }) => {
    return (
        <section className="todos">
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
                    <p className="todo-placeholder-text">
                        Add todo by clicking  {" "} 
                        <span className="add-btn-placeholder-text">Add</span> button on the 
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