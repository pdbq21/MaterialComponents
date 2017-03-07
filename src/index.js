import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';

import configureStore from './app/store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
/*
 ReactDOM.render(
 <BuilderContainer />,
 document.getElementById('root-app-pb')
 );*/