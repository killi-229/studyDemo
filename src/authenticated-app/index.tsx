// 已登录的界面
import Screens from "../screens";
import {useAuth} from "../context/auth-context";

const AuthenticatedApp = () => {
    const {logout} = useAuth()
    return (
        <>
            <Screens/>
            <button onClick={logout}>退出登录</button>
        </>
    )
}

export default AuthenticatedApp