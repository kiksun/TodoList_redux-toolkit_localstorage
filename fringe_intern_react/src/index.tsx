import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { configureStore } from '@reduxjs/toolkit'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import root from "./Rxtk/modules/userSlice";
import { Provider } from 'react-redux';
import store from "./Rxtk/modules/store";

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
