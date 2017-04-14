import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Question extends Component {
  render () {
    const { question, choices } = this.props;
    const style = {
      margin: 12
    };
    return (
      <div>
        {question}
        <div className='flex items-center justify-center flex-column'>
          {choices.map((val, index) => (
            <div><RaisedButton
              label={val}
              key={index}
              type='submit'
              style={style}
              rippleStyle={{
                color: 'green',
                opacity: 1
              }}
               />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
