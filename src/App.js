import {Route, Switch} from 'react-router-dom'

import NotFound from './components/NotFound'
import loginAssessment from './components/loginAssessment'
import signup from './components/signup'
import HomeTodo from './components/HomeTodo'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={loginAssessment} />
    <Route exact path="/signUpForm" component={signup} />
    <Route exact path="/" component={HomeTodo} />
    <Route path="/not-found" component={NotFound} />
  </Switch>
)

export default App
