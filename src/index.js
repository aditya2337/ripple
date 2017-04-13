import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {pinkA200} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    backgroundColor: pinkA200
  }
});

injectTapEventPlugin();
ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
