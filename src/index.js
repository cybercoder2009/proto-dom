import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDom from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import '../node_modules/mini.css/src/flavors/mini-default.scss'
import './index.scss'

import ui from './store/reducer_ui.js'
import user from './store/reducer_user.js'

const store = createStore(combineReducers({ui, user}))
window.getState = store.getState

import Home from './components/r_home.js'

class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <div className="container">
                    <ul id="header">
                        <li><Link to="/">Home</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)