// 未登录的界面
import {useState} from "react";
import Register from "./register";
import Login from "./login";

const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(true) // 是否显示注册界面
    return (
        <>
            {isRegister ? <Register/> : <Login/>}

            <button onClick={() => setIsRegister(!isRegister)}>切换{isRegister ? '登录' : '注册'}界面</button>
        </>
    )
}

export default UnauthenticatedApp