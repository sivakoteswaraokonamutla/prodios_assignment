import {Component} from 'react'
import NewTodo from '../NewTodo'

import './index.css'

class HomeTodo extends Component {
  state = {todoList: ['ReactJS', 'NodeJS'], todoInput: ''}

  changingTodoInput = event => {
    this.setState({todoInput: event.target.value})
  }

  createButtonClicked = () => {
    const {todoInput} = this.state
    if (todoInput !== '') {
      this.setState(prevState => ({
        todoInput: '',
        todoList: [...prevState.todoList, todoInput],
      }))
    }
  }

  onDelete = todo => {
    const {todoList} = this.state
    const filteredList = todoList.filter(eachTodo => eachTodo !== todo)
    this.setState({todoList: filteredList})
  }

  logoutClicked = () => {
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {todoInput, todoList} = this.state

    return (
      <>
        <div className="home-main-container">
          <h1>Todo Application</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter Todo"
              className="todo-input"
              value={todoInput}
              onChange={this.changingTodoInput}
            />
            <button
              onClick={this.createButtonClicked}
              className="create-button"
              type="button"
            >
              Create
            </button>
          </div>
          <ul>
            {todoList.map(eachTodo => (
              <NewTodo onDelete={this.onDelete} todo={eachTodo} />
            ))}
          </ul>
          <button
            type="button"
            className="logout-button"
            onClick={this.logoutClicked}
          >
            Logout
          </button>
        </div>
      </>
    )
  }
}
export default HomeTodo
