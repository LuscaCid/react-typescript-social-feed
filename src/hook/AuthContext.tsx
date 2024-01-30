import { createContext, useContext } from "react";
import { IAuthUserContext, IAuthorizedUserInfo } from "../interfaces/AuthInterface";
import type {LoginInfo} from '../interfaces/AuthInterface'
import react from 'react'
import {SignInResponse} from '../interfaces/AuthInterface'
const AuthContext = createContext<IAuthUserContext | null>(null)

interface AuthContextProviderProps {
    children : react.ReactNode
}

const testAuthenticatedUser : IAuthorizedUserInfo = {//it becomes from signIn
    user_id : 2,
    name : "Lucas Cid ADM",
    banner_img_url : "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?q=60&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profile_img_url : "https://github.com/luscacid.png",
    role : "Fullstack Developer",

}
export const AuthContextProvider = ({children} : AuthContextProviderProps) => {
    
    const signIn = (authObject: LoginInfo) => {
        
        return {

        }
    }
    const signUp = () => {
        return true
    }
    const data : IAuthUserContext = {
        ...testAuthenticatedUser, //spread userObject in this data obj
        signIn,
        signUp
    }
    return(
        <AuthContext.Provider value={data}>
           {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => { 
    const context = useContext(AuthContext)
    return context
}