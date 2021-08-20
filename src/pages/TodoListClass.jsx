import React from "react";
import Paper from '../components/paper/PaperClass';
import Header from '../components/header/HeaderClass';
import TodoForm from '../components/todoform/TodoFormClass';
import Todos from '../components/todos/Todos';
import Container from '../layout/ContainerClass';

class TodoList extends React.Component {
    state = {
        todos: [],
        showAdd: false
    }

    componentDidMount() {
        const todosStateLocalStorage = JSON.parse(localStorage.getItem('todos')) || [];
        const showAddStateLocalStorage = JSON.parse(localStorage.getItem('showAdd')) || false;
        this.setState({
            todos: todosStateLocalStorage,
            showAdd: showAddStateLocalStorage
        })
    }

    componentDidUpdate() {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
        localStorage.setItem("showAdd", JSON.stringify(this.state.showAdd));
    }

    addTodo = value => {
        const { todos } = this.state;
        const addedTodo = [
            ...todos, 
            { text: value, isCompleted: false } 
        ];

        if(todos.length > 9){
            alert('Only 10 todos allowed');
            return;
        }

        this.setState({
            todos: addedTodo
        })
    }

    completeTodo = index => {
        const { todos } = this.state;
        const addedTodo = [...todos];
        addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
        this.setState({
            todos: addedTodo
        })
    }

    clearTodos = () => {
        const { showAdd } = this.state;
        if ( showAdd ) {
            alert(' Finish add todo before clear ');
            return;
        }

        this.setState ({
            todos: []
        })
    }

    showAddToggle = () => {
        this.setState( 
            prevState => ({ showAdd : !prevState.showAdd }) 
        )
    }

    render () {
        const {todos,showAdd} = this.state;
        return (
            <Paper>
                <Container flexDirection="column" justifyContent="space-between" height="100%">
                    <Header showAddToggle={this.showAddToggle} showAdd={showAdd} clearTodos={this.clearTodos}/>
                    <TodoForm addTodo={this.addTodo} showAdd={showAdd} />
                    <Todos todos={todos} completeTodo={this.completeTodo} />
                </Container>
            </Paper>
        )
    }
}
export default TodoList;