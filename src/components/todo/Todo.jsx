/** @jsxImportSource @emotion/react */
//eslint-disable-next-line
import { jsx, useTheme } from '@emotion/react';
import PropTypes from "prop-types";
import * as styles from "./todo.styles";

const Todo = ({ text, completeTodo, isCompleted, index }) => {
    const theme = useTheme();
    return (
        <div css={ styles.todo({theme}) } onClick={ () => completeTodo(index) }>
            <span 
                css={ styles.todoText({ theme, isCompleted }) }
            >
                {text}
            </span>
        </div>
    )
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completeTodo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired
}

export default Todo;