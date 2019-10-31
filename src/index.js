import React from 'react';
import ReactDOM from 'react-dom';
import 'utils/rem'
import 'gstyle/reset.css'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import RouterComp from './router.config';
import { Provider } from 'react-redux'
import store from './store'
ReactDOM.render(
    <Provider store ={store}>
        <Router>
            <RouterComp></RouterComp>
        </Router>
    </Provider>
   
    , document.getElementById('root'));
