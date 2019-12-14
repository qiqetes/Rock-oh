import './App.scss';
import React, { Component } from 'react';
import Block from './Components/Block/Block';

import jsonData from './Assets/test.json';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Block blockData={jsonData.boulders[0]}></Block>

        </header>
      </div>
    );
  }
}

export default App;

