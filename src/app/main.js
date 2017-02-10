import React, { Component } from 'react'
import { render } from 'react-dom'
// import '../styles/main.css'
import '../styles/main.sass'
class Demo extends Component {
  render () {
    return <h1> Hellow Arshad!!</h1>
  }
}

render(<Demo />, document.getElementById('root'))
