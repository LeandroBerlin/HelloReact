import React, { Component } from 'react';
//we want to use SCSS, we installed node-sass
import './App.scss';

import Logo from './components/Logo'
import Message from './components/Message'

class App extends Component {

  //Create empty state (we want to see "React" - look at the code in Component Message)
  state = { name: "" }

  // Update the state with the input value
  updateUsername = (event) => {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { /* The Logo Comoponent */}
          <Logo />
          { /* The Message Comoponent - we pass the props name, we use the state */}
          <Message name={this.state.name} />
          { /* React event handler - when input changes we call updateUsername function */}
          <input type="text" id="name" onChange={this.updateUsername} />
        </header>
      </div>
    );
  }
}

export default App;
