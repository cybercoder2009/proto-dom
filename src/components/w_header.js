import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {Layout,Drawer,Avatar} from 'antd'
import {MenuOutlined,LogoutOutlined,UserOutlined,EllipsisOutlined} from '@ant-design/icons'

import {name,version} from '../../package.json'
import {kv_clear,useMobile} from '../helper'

const WHeader = _ => {

    const navigate = useNavigate()
    const mobile = useMobile()
    const [drawer_left, set_drawer_left] = useState(false)
    const [drawer_right, set_drawer_right] = useState(false)    

    return (
        <Layout.Header id="header">
            {mobile.test() 
                ? <>
                    <MenuOutlined onClick={_=>set_drawer_left(true)} />
                    <Drawer
                        title={name}
                        placement='left'
                        open={drawer_left}
                        onClose={_=>set_drawer_left(false)}
                    >
                        <Link to='/'>Home</Link>
                        <Link to='/setting'>Setting</Link>
                        <a target="_blank" href="https://google.ca" rel="noreferrer">About us</a>
                        <a target="_blank" href="https://google.ca" rel="noreferrer">Terms & policies</a>
                        <a target="_blank" href="https://google.ca" rel="noreferrer">Privacy policy</a>
                    </Drawer>
                    <span>{name}</span>
                </>
                : <div>v{version}</div>
            }
            {mobile.test()
                ? <>
                    <EllipsisOutlined onClick={_=>set_drawer_right(true)} />
                    <Drawer
                        title={name}
                        placement='right'
                        open={drawer_right}
                        onClose={_=>set_drawer_right(false)}
                    >
                        <Link to='/profile'>Profile</Link>
                        <a href="#" onClick={_=>{
                            kv_clear('user')
                            navigate('/login')
                        }}>Logout</a>
                    </Drawer>
                </>
                : <div>
                    <Avatar size="small" icon={<UserOutlined />} 
                        onClick={_=>navigate('/profile')} 
                    />
                    <LogoutOutlined
                        onClick={_=>{
                            kv_clear('user')
                            navigate('/login')
                        }}
                    />
                </div>
            }
        </Layout.Header>
    )
}

export default WHeader