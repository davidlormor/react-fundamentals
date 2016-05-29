import React, { Component } from 'react'
import { findDOMNode, render } from 'react-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this)
  }

  update (e) {
    const { red, green, blue } = this.refs

    this.setState({
      red: findDOMNode(red).value,
      green: findDOMNode(green).value,
      blue: findDOMNode(blue).value
    })
  }

  render () {
    const { red, green, blue } = this.state

    return (
      <div>
        <h1>Red</h1>
        <Slider ref='red' value={red} update={this.update} />
        {red}
        <h1>Green</h1>
        <Slider ref='green' value={green} update={this.update} />
        {green}
        <h1>Blue</h1>
        <Slider ref='blue' value={blue} update={this.update} />
        {blue}
      </div>
    )
  }
}

class Slider extends Component {
  render () {
    const { update, value } = this.props

    return <input type='range' min={0} max={255} value={value} onChange={update} />
  }
}

render(
  <App cat={5} />,
  document.getElementById('app')
)
