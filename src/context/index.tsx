// 使用context传递数据, 第二步, 把值传进app

import {AuthProvider} from "./auth-context";
import React from "react";

export interface AppProvider {
    children:React.ReactNode
}

// return <AuthProvider>{children}</AuthProvider> === <AuthProvider children={children} />
export const AppProvider = ({children}:AppProvider) => {
    return <AuthProvider>{children}</AuthProvider>
}