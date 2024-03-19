import React from 'react'
import {Layout} from 'antd'
import Package from '../../package.json'

const WFooter = _ => {

    return (
        <Layout.Footer id="footer">
            <div>{Package.name} @ 2023~{new Date().getFullYear()}</div>
            <div>
                <a target="_blank">About us</a>
                <a target="_blank">Terms & policies</a>
                <a target="_blank">Privacy policy</a>
            </div>
        </Layout.Footer>
    )
}

export default WFooter