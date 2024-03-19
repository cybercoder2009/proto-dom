import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

import {kv_get} from './helper'
import {
    ui_reducer,user_reducer,
    user_set,
} from './store'
const store = configureStore({
    reducer: {
        ui: ui_reducer,
        user: user_reducer
    }
})
window.getState = store.getState

let _user = kv_get('user')
if(_user) store.dispatch(user_set(_user))

import RHome from './components/r_home'
import RProfile from './components/r_profile'
import RSetting from './components/r_setting'
import RLogin from './components/r_login'
import RRegister from './components/r_register'
import './index.scss'

const App = _ => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route index path="/" element={<RHome />} />
                    <Route path="/profile" element={<RProfile />} />
                    <Route path="/setting" element={<RSetting />} />
                    <Route path="/login" element={<RLogin />} />
                    <Route path="/register" element={<RRegister />} /> 
                </Routes>
            </HashRouter>
        </Provider>
    )
}

createRoot(document.getElementById('app')).render(<Provider store={store}><App /></Provider>)