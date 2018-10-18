import React, { Component } from 'react';
import './App.css';
import environment from './environment'

import EmployeeList from './EmployeeList';

class App extends Component {
  render() {
    return (
      <div>
        <EmployeeList environment={environment} />
      </div>
    );
  }
}

export default App;
