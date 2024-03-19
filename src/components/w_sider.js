import React from 'react'
import {Link} from 'react-router-dom'
import {Layout} from 'antd'

import Package from '../../package.json'

const WSider = _ => {
    return (
        <Layout.Sider theme='light' id="sider" width="10%">
            <div>{Package.name}</div>
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/setting'>Setting</Link></div>
        </Layout.Sider>    
    )
}

export default WSider