import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index.js';

class Main extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <App />
        </Provider>
      </>
    )
  }
}

const rootEl = document.getElementById('root');
ReactDOM.render(<Main />, rootEl);
