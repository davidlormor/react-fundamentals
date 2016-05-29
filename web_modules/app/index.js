import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  constructor () {
    super()
    this.state = { txt: 'txt' }
    this.update = this.update.bind(this)
  }

  update (e) {
    this.setState({ txt: e.target.value })
  }

  render () {
    const { txt } = this.state

    return (
      <div>
        <Widget txt={txt} update={this.update} />
        <Widget txt={txt} update={this.update} />
        <Widget txt={txt} update={this.update} />
      </div>
    )
  }
}

const Widget = (props) => {
  const { txt, update } = props

  return (
    <div>
      <input type='text' value={txt} onChange={update} />
      <h1>{txt}</h1>
    </div>
  )
}

render(
  <App cat={5} />,
  document.getElementById('app')
)
