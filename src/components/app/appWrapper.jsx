import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './app'
import About from './about'
import Header from '../header'

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

const Root = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

const AppWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)

export default AppWrapper