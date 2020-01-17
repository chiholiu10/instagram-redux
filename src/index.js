import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import getData from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(
    getData,
    applyMiddleware(thunk)
);

const Instagram = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(<Instagram/>, document.getElementById('root'));
