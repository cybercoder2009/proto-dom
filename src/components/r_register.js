import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
import {Layout,Card,Input,Button} from 'antd'
import {EyeInvisibleOutlined,EyeTwoTone} from '@ant-design/icons'

import {user_action} from '../store'
import {kv_set} from '../helper'

const RRegister = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, set_data] = useState({email:'', password:''})

    return (
        <Layout style={{height:'100vh'}}>
            <Layout.Header>
                <div>PROTO_DOM</div>
            </Layout.Header>
            <Layout.Content style={{padding: 50}}>
                <Card title="Register"
                    style={{width: 300, margin: '0 auto'}}
                    actions={[
                        <Button onClick={_=>{
                            dispatch(user_action({email: data.email,token:''}))
                            kv_set('user', {email: data.email,token:''})
                            navigate('/')
                        }}>Register</Button>,
                        <Link to="/login">Login</Link>,
                    ]}
                >
                    <p>Email</p>
                    <Input value={data.email}
                        onChange={e=>set_data({...data, ...{email: e.target.value}})} />
                    <p>Password</p>
                    <Input.Password value={data.password}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        onChange={e=>set_data({...data, ...{password: e.target.value}})}
                    />
                </Card>
            </Layout.Content>
            <Layout.Footer style={{textAlign:'center'}}>
                POWERED BY PROTO_DOM©{new Date().getFullYear()}
            </Layout.Footer>
        </Layout>
    )
}

export default RRegister