import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='flex justify-center items-center h-100 tc f1'>
        <input type='text' className='tc bn buton-style  bg-transparent' placeholder='Enter your name, user' />
      </div>
    );
  }
}

export default App;
