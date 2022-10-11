import {useEffect, useState} from "react";

// 判断是否零
export const isFalsy = (v) => v === 0 ? false : !v

// 删除对象空值
export const cleanObject = (o:object) => {
    const ret = {...o}

    Object.keys(ret).forEach(k => {
        const v = ret[k]
        if(!v){
            delete ret[k]
        }
    })
    return ret
}


// 进页面调用一次
export const useMount = (callBack: () => void) => {
    useEffect(() => callBack(), [])
}

// 防抖: 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。
export const useDebounce = (value:any, delay?:number) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        // 每次value变化以后,设置一个定时器
        const timeout = setTimeout(() => setDebounceValue(value), delay)
        // 每次在上一次useEffect处理完执行
        return () => clearTimeout(timeout)
    }, [value, delay])

    return debounceValue
}