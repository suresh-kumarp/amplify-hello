import React from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
//import Auth from '@aws-amplify/auth';
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';
import aws_exports from './aws-exports';

// in this way you are only importing Auth and configuring it.
Amplify.configure(aws_exports);

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
