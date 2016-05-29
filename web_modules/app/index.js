import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      txt: 'the number is: ',
      cat: 0
    }
  }

  updateTxt (e) {
    this.setState({ txt: e.target.value })
  }

  updateCat (e) {
    this.setState({ cat: e.target.value })
  }

  render () {
    const { txt, cat } = this.state

    return (
      <div>
        <input type='text' onChange={this.updateTxt.bind(this)} value={txt} />
        <br />
        <input type='number' onChange={this.updateCat.bind(this)} value={cat} />
        <h1>{txt} {cat}</h1>
      </div>
    )
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
