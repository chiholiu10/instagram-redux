import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import todo from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';

export const store = createStore(
    todo,
    applyMiddleware(thunk)
)

const Instagram = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(<Instagram/>, document.getElementById('root'));
registerServiceWorker();
