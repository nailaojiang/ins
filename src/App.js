import React, { Component } from 'react';
import './App.scss'
class App extends Component {

  render() {
    return (
      <div className="App" ref='app'>
          {this.props.children}
      </div>
    );
  }
}

export default App;
