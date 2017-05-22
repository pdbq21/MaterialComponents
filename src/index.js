import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';

import ComponentsList from './demo/containers/ComponentsList';
//import App from './demo/containers/ComponentsView';
import configureStore from './demo/store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ComponentsList/>
    </Provider>,
    document.getElementById('root')
);