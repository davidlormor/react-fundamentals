import React, { Component } from 'react'
import { transform } from 'babel-standalone'
import './styles.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      error: ''
    }
    this.update = this.update.bind(this)
  }

  update (e) {
    const code = e.target.value

    try {
      this.setState({
        output: transform(code, {
          presets: ['es2015-loose', 'react', 'stage-0']
        }).code,
        error: ''
      })
    } catch (err) {
      this.setState({ error: err.message })
    }
  }

  render () {
    const { input, output, error } = this.state

    return (
      <div>
        <header>{error}</header>
        <div className='container'>
          <textarea defaultValue={input} onChange={this.update}></textarea>
          <pre>{output}</pre>
        </div>
      </div>
    )
  }
}

export default App
