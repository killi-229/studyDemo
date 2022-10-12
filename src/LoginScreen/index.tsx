import {FormEventHandler, SyntheticEvent} from "react";
import * as qs from "qs";
import {cleanObject} from "../utils";
const BaseUrl = process.env.REACT_APP_API_URL

const Login = () => {
    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        submit({username, password})
    }

    const submit = (param:{username:string; password:string}) => {
        fetch(`${BaseUrl}/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(param)
        }).then(async (res) => {
            console.log(res)
        })
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
            <button type={"submit"}>提交</button>
        </div>

    </form>
}

export default Login