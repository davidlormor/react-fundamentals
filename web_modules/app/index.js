import React, { Component } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

class App extends Component {
  constructor () {
    super()
    this.state = { val: 0 }
    this.update = this.update.bind(this)
  }

  componentWillMount () {
    console.log('mounting')
  }

  componentDidMount () {
    console.log('mounted')
  }

  componentWillUnmount () {
    console.log('unmounting')
  }

  update () {
    console.log('updating')

    this.setState({ val: this.state.val + 1 })
  }

  render () {
    console.log('rendering')

    return <button onClick={this.update}>{this.state.val}</button>
  }
}

class Wrapper extends Component {
  constructor () {
    super()
    this.mount = this.mount.bind(this)
    this.unmount = this.unmount.bind(this)
  }
  mount () {
    render(<App />, document.getElementById('a'))
  }

  unmount () {
    unmountComponentAtNode(document.getElementById('a'))
  }

  render () {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id='a'></div>
      </div>
    )
  }
}

render(
  <Wrapper />,
  document.getElementById('app')
)
