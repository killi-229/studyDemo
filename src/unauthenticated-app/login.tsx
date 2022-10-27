import { SyntheticEvent} from "react";
import {useAuth} from "../context/auth-context";
import {Button, Form, Input} from "antd";

const LoginScreen = () => {
    const {login} = useAuth()
    const handleSubmit = (values:{username:string, password:string}) => {
        login(values)
    }



    return <Form onFinish={handleSubmit}>
        <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input placeholder={'请输入用户名'}/>
        </Form.Item>

        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入用户密码' }]}>
            <Input.Password placeholder={'请输入用户密码'}/>
        </Form.Item>

        <Form.Item>
            <Button htmlType={"submit"} type="primary">登录</Button>
        </Form.Item>
    </Form>
}

export default LoginScreen