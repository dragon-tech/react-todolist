import React, { useState } from "react";
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
//eslint-disable-next-line
import { jsx, useTheme } from '@emotion/react';
import * as styles from "./todoform.styles";

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
          <section css={ styles.add }>
            <form css={ styles.addForm } onSubmit={handleFormSubmit}>
              <input 
                type="text" 
                css={ styles.addInput({ theme }) } 
                value={ value } 
                onChange={ e => setValue(e.target.value) } 
              />
              <button css={ styles.addBtn({ theme }) }>ADD</button>
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