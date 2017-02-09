import { React, Component } from 'react';
import { render } from 'react-dom';

class Demo extends Component {
  render() {
    return <h1> Hellow World!!</h1>
  }
}

render(<Demo />, document.getElementById("root"));