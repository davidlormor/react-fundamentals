import React, { Component } from 'react'

const Counter = (InnerComponent) => class extends Component {
  constructor () {
    super()
    this.state = { val: 0 }
    this.update = this.update.bind(this)
  }

  update () {
    this.setState({val: this.state.val + 1})
  }

  render () {
    return <InnerComponent update={this.update} {...this.state} {...this.props} />
  }
}

const Button = ({ update, val }) => <button onClick={update}>{val}</button>
const Label = ({ update, val }) => <label onMouseOver={update}>{val}</label>
const CounterButton = Counter(Button)
const CounterLabel = Counter(Label)

class App extends Component {
  render () {
    return (
      <div>
        <CounterLabel />
        <br />
        <CounterButton />
      </div>
    )
  }
}

export default App
