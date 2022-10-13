import { SyntheticEvent} from "react";
import {useAuth} from "../context/auth-context";

const LoginScreen = () => {
    const {login} = useAuth()
    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({username, password})
    }



    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id="username"/>
        </div>

        <div>
            <label htmlFor="password">用户名</label>
            <input type="password" id="password"/>
        </div>

        <div>
            <button type={"submit"}>登录</button>
        </div>

    </form>
}

export default LoginScreen