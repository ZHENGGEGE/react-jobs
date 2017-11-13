import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducer'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
  } from 'react-router-dom'
  import Dashbord from './Dashbord'
  import './config'
  import 'antd-mobile/dist/antd-mobile.css';


const reduxDevtools = window.devToolsExtension ? window.devToolsExtension():f => f
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDevtools
))


ReactDom.render(
    (<Provider store={store}>
        <Router>
                
        </Router>     
    </Provider>), 
    document.getElementById('root')
)

