/** @jsxImportSource @emotion/react */
//eslint-disable-next-line
import { jsx, useTheme } from '@emotion/react';
import PropTypes from "prop-types";
import Todo from "../todo/Todo";
import * as styles from "./todos.styles";

const Todos = ({ todos, completeTodo }) => {
    const theme = useTheme();
    return (
        <section css={ styles.todos }>
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
                    <p css={ styles.todoPlaceholderText }>
                        Add todo by clicking  {" "} 
                        <span css={ styles.addBtnPlaceholderText({ theme }) }>Add</span> button on the 
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