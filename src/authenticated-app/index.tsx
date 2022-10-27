// 已登录的界面
import Screens from "../screens";
import {useAuth} from "../context/auth-context";
import {Button} from "antd";

const AuthenticatedApp = () => {
    const {logout} = useAuth()
    return (
        <>
            <Screens/>
            <Button type="primary" onClick={logout}>退出登录</Button>
        </>
    )
}

export default AuthenticatedApp