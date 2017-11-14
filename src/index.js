import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Login from './container/login/login'
import Register from './container/register/register'
import reducers from './reducer'
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
  } from 'react-router-dom'
  import './config'
  


const reduxDevtools = window.devToolsExtension ? window.devToolsExtension():f => f
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDevtools
))


ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
            </div>
        </BrowserRouter>     
    </Provider>), 
    document.getElementById('root')
)

