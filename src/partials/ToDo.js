import React from 'react'
import ToDoItem from './todoItem'
import todosData from './todosData'

class ToDo extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: todosData,
            allDone: false
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }




render() {

    const todoItems = this.state.todos.map(item2 => <ToDoItem key={item2.id} item={item2} handleChange={this.handleChange} />)
    
    

    return (

        
        <div className="todo-list">
            {todoItems}
        </div>  
    )

}
}


export default ToDo


