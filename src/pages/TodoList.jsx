import React,{ useState } from 'react';

import Paper from '../components/paper/Paper';
import Header from '../components/header/Header';
import TodoForm from '../components/todoform/TodoForm';
import Todos from '../components/todos/Todos';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React!", isCompleted: false },
    { text: "Learning React Hooks!", isCompleted: false },
    { text: "Learning styling in react", isCompleted: false }
  ]);

  const addTodo = value => {
    const addedTodo = [...todos, { text: value, isCompleted: false } ];
    if(addedTodo.length > 10){
      alert('Only 10 todos allowed');
      return;
    }

    setTodos(addedTodo);
  }

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  }

  const [showAdd, setShowAdd] = useState(false);
  
  const showAddToggle = () => setShowAdd(!showAdd);

  const clearTodos = () => !showAdd && setTodos([]);

  return (
    <Paper>
        <Header showAddToggle={showAddToggle} showAdd={showAdd} clearTodos={clearTodos}/>
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
}

export default TodoList;
