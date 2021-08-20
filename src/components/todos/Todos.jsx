import React from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
//eslint-disable-next-line
import { jsx, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import Todo from '../todo/TodoClass';
import * as styles from './todos.styles';
import Container from '../../layout/Container';
import Item from '../../layout/Item';

const Todos = ({ todos, completeTodo }) => {
    const theme = useTheme();
    return (
        <section className="todos-component">
            <Container flexDirection="column" minHeight="500px">
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
                    <React.Fragment>
                        <p css={ styles.todoPlaceholderText }>
                            Add todo by clicking  {" "} 
                            <span css={ styles.addBtnPlaceholderText({ theme }) }>Add</span> button on the 
                            top left corner.
                        </p>
                        <Container justifyContent="center">
                            <Item>
                                <span css={styles.seeAboutPagePagePlaceholderText}>
                                    <Link to="/about">
                                        Or visit about
                                    </Link>
                                </span>
                            </Item>
                        </Container>
                    </React.Fragment>
                )}
            </Container>
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