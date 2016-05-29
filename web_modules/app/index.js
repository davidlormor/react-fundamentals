import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

class App extends Component {
  constructor () {
    super()
    this.update = this.update.bind(this)
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
  }

  update () {
    const { red, green, blue } = this.refs

    this.setState({
      red: findDOMNode(red.refs.inp.refs.inp).value,
      green: findDOMNode(green.refs.inp.refs.inp).value,
      blue: findDOMNode(blue.refs.inp.refs.inp).value
    })
  }

  render () {
    const { red, green, blue } = this.state

    return (
      <div>
        <ColorSlider ref='red' label='R' value={+red} update={this.update} /> - {red}
        <ColorSlider ref='green' label='G' value={+green} update={this.update} /> - {green}
        <ColorSlider ref='blue' label='B' value={+blue} update={this.update} /> - {blue}
      </div>
    )
  }
}

class ColorSlider extends Component {
  render () {
    return <NumInput ref='inp' type='number' min={0} max={255} step={1} {...this.props} />
  }
}

class NumInput extends Component {
  render () {
    const {
      min,
      max,
      step,
      value,
      label,
      update,
      type
    } = this.props

    return (
      <div>
        <label>{label}</label>
        <input ref='inp' type={type} min={min} max={max} step={step} value={value} onChange={update} />
      </div>
    )
  }
}

NumInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  label: PropTypes.string,
  update: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
}

export default App
