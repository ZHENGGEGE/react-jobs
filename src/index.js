import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Login from './container/login/login'
import Register from './container/register/register'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import DashBoard from './component/dashboard/dashboard'
import AuthRouth from './component/authroute/authroute'
import Chat from './component/chat/chat'
import reducers from './reducer'
import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'
import './config'
import './index.css'

  


const reduxDevtools = window.devToolsExtension ? window.devToolsExtension():f => f
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDevtools
))

// function Boss(){
//         return <h2>boss页面</h2>
    
// }


ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRouth></AuthRouth>
                <Switch>
                <Route path="/geniusinfo" component={GeniusInfo}></Route>
                <Route path="/bossinfo" component={BossInfo}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/chat/:user' component={Chat}></Route>
                <Route path='' component={DashBoard}></Route>
                </Switch>
            </div>
        </BrowserRouter>     
    </Provider>), 
    document.getElementById('root')
)

