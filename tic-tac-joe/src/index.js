import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchLeaderboard } from './redux/actions'
import registerServiceWorker from './registerServiceWorker';

const newStore = store();

newStore.dispatch(fetchLeaderboard())



ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
