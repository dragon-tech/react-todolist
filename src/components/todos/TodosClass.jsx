import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";
import Todo from "../todo/TodoClass";
import Container from "../../layout/Container";

const StyledTodoPlaceholderText = styled.p`
    font-family: "Fredoka One", sans-serif;
    font-size: 24px;
    text-align: center;
    padding: 16px;
`;

const StyledAddBtnPlaceholderText = styled.span`
    text-transform: uppercase;
    font-size: 26px;
    font-family: "Fredoka One", sans-serif;
    font-weight: 600;
    color: ${ props => props.theme.color.primary.black };
`;

class Todos extends React.Component {
    render() {
        const { todos, completeTodo, theme } = this.props;
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
                        <StyledTodoPlaceholderText>
                            {[
                                "Add todo by clicking ",
                                <StyledAddBtnPlaceholderText theme={ theme }>
                                    Add
                                </StyledAddBtnPlaceholderText>,
                                " button on the top left corner. "
                            ]} 
                        </StyledTodoPlaceholderText>
                )}
                </Container>
            </section>
        )
    }

    static propTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string
            })
        ),
        completeTodo: PropTypes.func.isRequired
    }
}

export default withTheme(Todos);