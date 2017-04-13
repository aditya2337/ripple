import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class NameForm extends Component {

  constructor (props) {
    super(props);

    this.state = {
      showButton: false,
      question1: {
        q: `Adam is smaller than John,
        Jamie is taller than Alex,
        John is taller than Jamie,
        Jamie is smaller than Adam.
        Who is the tallest?`,
        choices: [
          'John',
          'Adam',
          'Alex',
          'Jamie'
        ]
      }
    };
  }

  handleChange = () => {
    const { username } = this.refs;

    if (username.value.length > 0) {
      this.setState({ showButton: true });
    } else {
      this.setState({ showButton: false });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

  }

  render () {
    const { showButton } = this.state;

    const Button = (showButton) ? (
      <FloatingActionButton type='submit'>
        <ArrowForward />
      </FloatingActionButton>
    ) : (
      ''
    );
    return (
      <form className='flex flex-column' onSubmit={this.handleSubmit}>
        <input
          type='text'
          className='tc bn buton-style  bg-transparent'
          placeholder='Enter your name, user'
          onChange={this.handleChange}
          ref='username'
          />
        <div className='pt4'>
          <ReactCSSTransitionGroup
            transitionName='example'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {Button}
          </ReactCSSTransitionGroup>
        </div>
      </form>
    );
  }
}
