import {useAuth} from "../context/auth-context";
import qs from 'qs';
import * as auth from '../utils/auth-provider'
const BaseUrl = process.env.REACT_APP_API_URL

interface Config extends RequestInit {
    data?: object;
    token?: string;
}

// 封装fetch
// axios 和 fetch 的表现不一样，axios可以直接在返回状态不为2xx的时候抛出异常
const Http = (endpoint: string, {data, token, headers, ...customConfig}: Config = {}) => {
    const config = {
        method: "GET",
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "Content-Type": data ? "application/json" : "",
        },
        ...customConfig
    }


    if (config.method.toUpperCase() === "GET") {
        endpoint += `?${qs.stringify(data)}`;
    } else {
        config.body = JSON.stringify(data || {});
    }
    return window.fetch(`${BaseUrl}/${endpoint}`, config).then(async (response) => {
        if (response.status === 401) {
            await auth.logout();
            window.location.reload();
            return Promise.reject({message: "请重新登录"});
        }
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            return Promise.reject(data);
        }
    })
}

// http封装加一层,让token自动传入
export const useHttp = () => {
    const {user} = useAuth()
    // Parameters<typeof http> 用 http()传参类型
    return (...[endpoint, config]: Parameters<typeof Http>) => Http(endpoint, {...config, token: user?.token})
}


export default Http