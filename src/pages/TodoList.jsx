import React,{ useState } from 'react';

import Paper from '../components/Paper';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React!", isCompleted: false },
    { text: "Learning React Hooks!", isCompleted: false },
    { text: "Learning styling in react", isCompleted: false }
  ]);

  const addTodo = value => {
    const addedTodo = [...todos, { text: value, isCompleted: false } ];
    setTodos(addedTodo);
  }

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  }

  const [showAdd, setShowAdd] = useState(false);
  
  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
        <Header showAddToggle={showAddToggle} showAdd={showAdd} />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
}

export default TodoList;
