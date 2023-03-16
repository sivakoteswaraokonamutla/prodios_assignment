import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class signup extends Component {
  state = {username: '', password: '', confirmpassword: ''}

  submittedForm = event => {
    event.preventDefault()
    const {username, password, confirmpassword} = this.state
    console.log(username, password)
    if (username === '') {
      this.setState({msg: 'Please Enter Username'})
    } else if (password === '' || confirmpassword === '') {
      this.setState({msg: 'Please Enter Paswword'})
    } else if (password !== confirmpassword) {
      this.setState({msg: "Password didn't match"})
    } else if (password === confirmpassword) {
      Cookies.set(username, password, {expires: 1})
      this.setState({
        msg: 'You are registered successfully',
        username: '',
        password: '',
        confirmpassword: '',
      })
    }
  }

  changingUsername = event => {
    this.setState({username: event.target.value})
  }

  changingPassword = event => {
    this.setState({password: event.target.value})
  }

  changingConfirmPassword = event => {
    this.setState({confirmpassword: event.target.value})
  }

  render() {
    const {username, password, confirmpassword, msg} = this.state
    let msgstyling = ''

    if (msg === 'You are registered successfully') {
      msgstyling = 'success-message'
    } else {
      msgstyling = 'error-message'
    }

    return (
      <>
        <div className="signup-main-container">
          <h1>Sign Up</h1>
          <form onSubmit={this.submittedForm}>
            <div>
              <label htmlFor="username">Enter Username</label>
              <br />
              <input
                value={username}
                className="username-input-field"
                placeholder="Enter Username"
                onChange={this.changingUsername}
                id="username"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="password">Enter Password</label>
              <br />
              <input
                value={password}
                placeholder="Enter Password"
                className="password-input-field"
                onChange={this.changingPassword}
                id="password"
                type="password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <br />
              <input
                value={confirmpassword}
                placeholder="Confirm Password"
                className="password-input-field"
                onChange={this.changingConfirmPassword}
                id="confirmPassword"
                type="password"
              />
            </div>
            <p className={msgstyling}>{msg}</p>
            <button className="signup-button" type="submit">
              Signup
            </button>
          </form>

          {msg === 'You are registered successfully' && (
            <Link to="/login">Login here</Link>
          )}
        </div>
      </>
    )
  }
}
export default signup
