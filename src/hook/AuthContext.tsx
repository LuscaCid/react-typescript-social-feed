import { createContext, useContext } from "react";
import { IAuthUserContext, IAuthorizedUserInfo } from "../interfaces/AuthInterface";
import type {LoginInfo} from '../interfaces/AuthInterface'
import react from 'react'
const AuthContext = createContext<IAuthUserContext | null>(null)

interface AuthContextProviderProps {
    children : react.ReactNode
}

const testAuthenticatedUser : IAuthorizedUserInfo = {
    user_id : 2,
    name : "",
    banner_img_url : "",
    profile_img_url : "",
    role : "",

}

export const AuthContextProvider = ({children} : AuthContextProviderProps) => {
    
    const signIn = (authObject: LoginInfo) => {
    
        return true
    }
    const data : IAuthUserContext = {
        ...testAuthenticatedUser, //spread userObject in this data obj
        signIn
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