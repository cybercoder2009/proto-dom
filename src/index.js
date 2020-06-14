import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDom from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import ui from './store/reducer_ui.js'
import user from './store/reducer_user.js'

const store = createStore(combineReducers({ui, user}))
window.getState = store.getState

import Header from './components/w_header.js'
import Home from './components/r_home.js'
import About from './components/r_about.js'

class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                </Switch>
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