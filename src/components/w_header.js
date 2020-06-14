import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './w_header.scss'

class Header extends Component {
    render(){
        return (
            <ul id="header">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        )
    }
}

export default connect((props)=>{
    return props
})(Header)