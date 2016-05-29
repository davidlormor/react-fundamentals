import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  constructor () {
    super()
    this.state = { txt: 'txt' }
  }

  update (e) {
    this.setState({ txt: e.target.value })
  }

  render () {
    const { txt } = this.state

    return (
      <div>
        <input type='text' value={txt} onChange={this.update.bind(this)} />
        <h1>{txt}</h1>
      </div>
    )
  }
}

render(
  <App cat={5} />,
  document.getElementById('app')
)
