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
      },
      question2: {
        q: `How many ducks does it take
        to have two ducks behind one duck,
        one duck in front of two ducks,
        and two ducks in front of one duck?`,
        choices: [
          '9 Ducks',
          '2 Ducks',
          '1 Duck',
          '3 Ducks'
        ]
      },
      question3: {
        q: `A rooster lays an egg on a roof.
        The wind is blowing East.
        Which way will the egg fall?`,
        choices: [
          'There is no egg',
          'West',
          'South',
          'North',
          'East'
        ]
      },
      question4: {
        q: `Two fathers took there sons fishing.
        They all caught exactly one fish.
        When they came back, they had three fish.
        None of the fish were stolen,
        eaten or thrown overboard.
        How come they only had three?`,
        choices: [
          'Because it was rotten',
          'Because they gave one fish away',
          'Because someone ate it',
          'Because the grandfather took his son fishing and he took his son fishing'
        ]
      },
      question5: {
        q: `Which does not belong?`,
        choices: [
          'Apple',
          'Corn',
          'Tomato',
          'Banana'
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
