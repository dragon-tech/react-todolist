import React,{ useState } from 'react';
import Paper from '../components/paper/PaperClass';
import Header from '../components/header/HeaderClass';
import TodoForm from '../components/todoform/TodoFormClass';
import Todos from '../components/todos/TodosClass';
import Container from '../layout/Container';
import useStateWithLocalStorage from '../hooks/useStateWithLocalStorage';

const TodoList = () => {
  const [todos,setTodos] = useStateWithLocalStorage("todos");
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

  const clearTodos = () => {
    if ( showAdd ){
      alert(' Finish add todo before clear ');
      return;
    }

    setTodos([]);
  }

  return (
    <Paper>
      <Container flexDirection="column" justifyContent="space-between" height="100%">
        <Header showAddToggle={showAddToggle} showAdd={showAdd} clearTodos={clearTodos}/>
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
        </Container>
    </Paper>
  );
}

export default TodoList;
