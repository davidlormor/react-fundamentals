import React, { Component } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

class App extends Component {
  constructor () {
    super()
    this.state = { val: 0, m: 2 }
    this.update = this.update.bind(this)
  }

  componentDidMount () {
    this.inc = setInterval(this.update, 500)
  }

  componentWillUnmount () {
    clearInterval(this.inc)
  }

  update () {
    this.setState({ val: this.state.val + 1 })
  }

  render () {
    const { m, val } = this.state

    return <h1>{val * m}</h1>
  }
}

class Wrapper extends Component {
  constructor () {
    super()
    this.mount = this.mount.bind(this)
    this.unmount = this.unmount.bind(this)
  }
  mount () {
    render(<App />, document.getElementById('mount-point'))
  }

  unmount () {
    unmountComponentAtNode(document.getElementById('mount-point'))
  }

  render () {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id='mount-point'></div>
      </div>
    )
  }
}

export default Wrapper
