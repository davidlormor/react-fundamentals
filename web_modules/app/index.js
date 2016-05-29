import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      people: [
        {id: 1, name: 'David'},
        {id: 2, name: 'Jordan'},
        {id: 3, name: 'Renick'},
        {id: 4, name: 'Galilee'},
        {id: 5, name: 'Magdalene'}
      ]
    }
  }

  render () {
    const people = this.state.people.map((person) => {
      return <Person key={person.id} person={person} />
    })

    return <div>{people}</div>
  }
}

const Person = ({ person: { id, name } }) => {
  return <div>{id}. {name}</div>
}

export default App
