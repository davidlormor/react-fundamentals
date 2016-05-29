import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render () {
    return <Button>Click Me!</Button>
  }
}

class Button extends Component {
  render () {
    return <button>{this.props.children}</button>
  }
}

render(
  <App />,
  document.getElementById('app')
)
