// 使用context传递数据, 第一步
import React, {useState} from "react";
import * as auth from '../utils/auth-provider'
import {User} from "../screens/search-panel";
import {AppProvider} from "./index";
import Http from "../utils/http";
import {useMount} from "../utils";


interface AuthForm {
    username: string,
    password: string
}

interface AuthContext {
    user: User | null;
    login: (form:AuthForm) => Promise<void>;
    register: (form:AuthForm) => Promise<void>;
    logout: () => Promise<void>
}

// 检查是否登陆获取用户数据
const initUser = async () => {
    let user = null
    const token = auth.getToken()
    if(token){
        const data = await Http('me', {token})
        user = data.user
    }

    return user
}


const AuthContext = React.createContext<AuthContext|undefined>(undefined)
AuthContext.displayName = "AuthContext"

export const AuthProvider = ({children}:AppProvider) => {
    const [user, setUser] = useState<User | null>(null)

    // 请求接口
    const login = (form:AuthForm) => auth.login(form).then(user => setUser(user))  // then(user => setUser(user))  ===  then(setUser)
    const register = (form:AuthForm) => auth.register(form).then(setUser)  // then(user => setUser(user))  ===  then(setUser)
    const logout = () => auth.logout().then(() => setUser(null))

    // 页面第一次进来获取用户数据
    useMount(() => {
        initUser().then(setUser)
    })

    // 把接口传递到每个组件可以用
    return (
        <AuthContext.Provider
            children={children}
            value={{user,login, register, logout}}
        />
    )
}

export const useAuth = () => {
    const context = React.useContext(AuthContext)

    if(!context){
        throw new Error('useAuth必须在AuthProvider中使用')
    }

    return context
}