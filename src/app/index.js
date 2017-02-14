import React, { Component } from 'react'
import { render } from 'react-dom'
import './style.sass'

class Demo extends Component {
  render () {
    return (<div>
      <h1>Hello World!</h1>
    </div>)
  }
}

render(<Demo />, document.getElementById('root'))
