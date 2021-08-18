import React, { useState } from "react";
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
//eslint-disable-next-line
import { jsx, useTheme } from '@emotion/react';
import * as styles from "./todoform.styles";
import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/ButtonNoJSX";

const TodoForm = ({ addTodo,showAdd }) => {
    const [value, setValue] = useState("");

    const handleFormSubmit = e => {
      e.preventDefault();
      if(!value) {
        alert("No Blank Todo");
        return;
      }

      if(value.length > 40){
        alert("Please create a shorter todo text");
        setValue("");
        return;
      }

      addTodo(value);
      setValue("");
    }

    const theme = useTheme();

    if(showAdd){
      return (
          <section className="todoform-component">
            <form onSubmit={handleFormSubmit}>
              <Container alignContent="flex-start">
                <Item flex={1} padding="0 0 0 16px">
                  <input 
                    type="text" 
                    css={ styles.addInput({ theme }) } 
                    value={ value } 
                    onChange={ e => setValue(e.target.value) } 
                  />
                </Item>
                <Item>
                  {/* <button css={ styles.addBtn({ theme }) }>ADD</button>
                   */}
                   <Button text="Add" padding="0 16px 0 16px" />
                </Item>
              </Container>
            </form>
          </section>
      );
    } else {
      return null;
    }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
}

export default TodoForm;