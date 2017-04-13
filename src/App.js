import React, { Component } from 'react';
import './App.css';
import NameForm from './components/NameForm';

class App extends Component {
  render () {
    return (
      <div className='flex justify-center items-center h-100 tc f1'>
        <NameForm />
      </div>
    );
  }
}

export default App;
