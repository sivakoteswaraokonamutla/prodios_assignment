import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'

import './index.css'

class loginAssessment extends Component {
  state = {username: '', password: '', msg: ''}

  changingUsername = event => {
    this.setState({username: event.target.value})
  }

  changingPassword = event => {
    this.setState({password: event.target.value})
  }

  subittedLoginForm = event => {
    event.preventDefault()
    const {username, password} = this.state
    const {history} = this.props
    const getPassword = Cookies.get(username)
    if (username === '') {
      this.setState({msg: 'Please enter username'})
    } else if (getPassword === undefined) {
      this.setState({msg: 'You are not registered'})
    } else if (password === '') {
      this.setState({msg: 'Please enter password'})
    } else if (password !== getPassword) {
      this.setState({msg: 'Wrong Password'})
    } else if (password === getPassword) {
      this.setState({msg: '', username: '', password: ''})
      history.replace('/')
    }
  }

  render() {
    const {username, password, msg} = this.state

    return (
      <>
        <div className="login-main-container">
          <h1>Login</h1>
          <form onSubmit={this.subittedLoginForm}>
            <div>
              <label htmlFor="username">USERNAME</label>
              <br />
              <input
                onChange={this.changingUsername}
                value={username}
                className="username-input-field"
                placeholder="Enter Username"
                id="username"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="password">PASSWORD</label>
              <br />
              <input
                onChange={this.changingPassword}
                value={password}
                className="password-input-field"
                placeholder="Enter Password"
                id="password"
                type="password"
              />
            </div>
            <p className="error-message">{msg}</p>
            <button type="submit" className="login-button">
              Login
            </button>
            <div className="signup-container">
              <p>New user? </p>
              <Link to="/signUpForm">SignUp here</Link>
            </div>
          </form>
        </div>
      </>
    )
  }
}
export default loginAssessment
