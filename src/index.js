import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux'
import App from './components/App';
import Reducers from './reducers';


ReactDOM.render(
    <Provider store={createStore(Reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
)