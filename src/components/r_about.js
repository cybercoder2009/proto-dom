import React, { Component } from 'react'
import { connect } from 'react-redux'

import './r_about.scss'

class About extends Component {
    render(){
        return (
            <div id="about">
                about
            </div>
        )
    }
}

export default connect((props)=>{
    return props
})(About)