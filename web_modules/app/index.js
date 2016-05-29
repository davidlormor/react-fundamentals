import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render () {
    const { txt, cat } = this.props

    return <h1>{txt}{cat}</h1>
  }
}

App.propTypes = {
  txt: PropTypes.string.isRequired,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'Welcome, user #'
}

render(
  <App cat={5} />,
  document.getElementById('app')
)
