import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.css';

axios.defaults.baseURL = 'http://api.tvmaze.com';

axios.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById( 'root' ) 
);
registerServiceWorker();
