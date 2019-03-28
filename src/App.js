import React, { Component } from 'react';
import './App.scss';

import Logo from './components/Logo'
import Message from './components/Message'

class App extends Component {

  //Create empty state (we want to see "Marta" - look at the code in Component Messge)
  state = { name: "" }

  // Update the state with the new name while typing
  updateUsername = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Message name={this.state.name} />
          { /* When input changes call the function */}
          <input type="text" id="name" onChange={this.updateUsername} />
        </header>
      </div>
    );
  }
}

export default App;
