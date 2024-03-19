import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Layout} from 'antd'

import {useMobile} from '../helper'
import WSider from './w_sider'
import WHeader from './w_header'
import WFooter from './w_footer'

const RHome = _ => {

    const navigate = useNavigate()
    const mobile = useMobile()
    const user = useSelector(state => state.user)
    const [loaded, set_loaded] = useState(false)

    useEffect(_ => {
        user.token === '' && navigate('/login')
        if(!loaded) {
            set_loaded(true)
            console.log('r_home.js loaded')
            
        }
    },[])

    return (
        <Layout style={{height:'100vh'}}>
            {!mobile.test() && <WSider />}
            <Layout>
                <WHeader />
                <Layout.Content id="content">
                    <h1>Home</h1>
                </Layout.Content>
                {!mobile.test() && <WFooter />}
            </Layout>
        </Layout>
    )
}

export default RHome