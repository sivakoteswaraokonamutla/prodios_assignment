import './index.css'

const NewTodo = props => {
  const {todo, onDelete} = props

  const onClickDelete = () => {
    onDelete(todo)
  }

  return (
    <>
      <li className="list-item">
        <div className="todo-list-item">
          <input type="checkbox" className="update-input" />
          <p className="todo-name">{todo}</p>
          <button
            onClick={onClickDelete}
            type="button"
            className="delete-button"
          >
            delete
          </button>
        </div>
      </li>
    </>
  )
}
export default NewTodo
