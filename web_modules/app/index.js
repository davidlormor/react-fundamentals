import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = { val: 0 }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }

  increase () {
    this.setState({ val: this.state.val + 1 })
  }

  decrease () {
    this.setState({ val: this.state.val - 1 })
  }

  render () {
    const { val } = this.state

    return (
      <div>
        <Counter value={val} />
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    )
  }
}

class Counter extends Component {
  constructor () {
    super()
    this.state = { increasing: false }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ increasing: nextProps.value > this.props.value })
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.value % 5 === 0
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('prevProps', prevProps)
  }

  render () {
    const { value } = this.props
    const { increasing } = this.state

    return <h1>Count: {value} <small>({increasing ? 'Increasing' : 'Decreasing'})</small></h1>
  }
}

export default App
