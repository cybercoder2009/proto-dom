import React, { Component } from 'react'
import { connect } from 'react-redux'

import './r_home.scss'

class Home extends Component {
    render(){
        return (
            <div id="home">
                home
            </div>
        )
    }
}

export default connect((props)=>{
    return props
})(Home)