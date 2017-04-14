import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import questions from '../questions';
import Question from './Question';

export default class NameForm extends Component {

  constructor (props) {
    super(props);

    this.state = {
      showButton: false,
      questions,
      answeredCount: 1,
      showQuestions: false
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
    const { answeredCount } = this.state;
    this.setState({ showQuestions: true, answeredCount: answeredCount + 1 });
  }

  render () {
    const { showButton, showQuestions, answeredCount } = this.state;
    const Button = (showButton) ? (
      <FloatingActionButton type='submit'>
        <ArrowForward />
      </FloatingActionButton>
    ) : (
      ''
    );

    const form = (showQuestions) ? (
      <form onSubmit={this.handleSubmit}>
        <Question question={questions[`question_${answeredCount}`].q}
          choices={questions[`question_${answeredCount}`].choices} />
      </form>
    ) : (
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
    return form;
  }
}
