import { createContext, useState } from "react";

const defaultValue = {
    token:'',
    userId:null,
    userLoggedIn:false,
    login:()=>{},
    logout:()=>{}
}
const AuthContext = createContext(defaultValue);
const tokenLocalStorage = localStorage.getItem('token')
const userIdLocalStorage = localStorage.getItem('userId')

export const AuthContextProvider =(props)=>{

    const [token , setToken] = useState(tokenLocalStorage)
    const [userId, setUserId] = useState(userIdLocalStorage)

    const handlerLogin = (token,userId)=>{
        setToken(token)
        setUserId(userId)
        localStorage.setItem('token',token)
        localStorage.setItem('userId',userId)
    }

    const handlerLogout = ()=>{
        setToken(null)
        setUserId(null)
        localStorage.clear()
    }

    const userLoggedIn = !!token

    const contextValue = {
        token:token,
        userId:userId,
        isLoggedIn:userLoggedIn,
        login:handlerLogin,
        logout:handlerLogout

    }
    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext