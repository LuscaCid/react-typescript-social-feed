import { createContext, useContext, useReducer } from "react";
import { IAuthUserContext, IAuthorizedUserInfo } from "../interfaces/AuthInterface";
import type {LoginInfo} from '../interfaces/AuthInterface'
import react from 'react'
import {SignInResponse} from '../interfaces/AuthInterface'

const AuthContext = createContext({} as IAuthUserContext)

interface AuthContextProviderProps {
    children : react.ReactNode
}

const user : IAuthorizedUserInfo = {//it becomes from signIn
    user_id : 2,
    name : "Lucas Cid ADM",
    banner_img_url : "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?q=60&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profile_img_url : "https://github.com/luscacid.png",
    role : "Fullstack Developer",
    biograPhy : "luqueta, desenvolvedor pica",
    sensivityInfo : {
        email : "lucasfelipaaa@gmail.com",
        password : "123",
        username : "lucascid"
    }
}

type State = {
    user? : IAuthorizedUserInfo
}
type Action = 
    {type : "loggon", payload : {username? : string, email? : string, password : string} }|
    {type : "editUsername", payload : {newUsername : string}} |
    {type : "editEmail", payload : {newEmail : string}} |
    {type : "editPassword", payload : {newPassword : string, oldPassword: string}}

const reducer = (state : State , action : Action)  : State => {
    switch(action.type){
        case 'editUsername' :
            return {}
           
        default :
            return state   
    }
}

export const AuthContextProvider = ({children} : AuthContextProviderProps) => {

    const [state, dispatch] = useReducer(reducer, {})

    const signIn = (authObject: LoginInfo) : SignInResponse=> {
        console.log(authObject)
        return {

        }
    }
    const signUp = ({password,email,username} : LoginInfo) => {
        console.log(password,email,username)
        return true
    }

    const updateProfileImage = (file : File) => {
        console.log(file)
        return true
    }

    const data : IAuthUserContext = {
        user, //spread userObject in this data obj
        signIn,
        signUp,
        updateProfileImage
    }
    return(
        <AuthContext.Provider value={data}>
           {children}
        </AuthContext.Provider>
    )
}

export function useAuth() : IAuthUserContext {
    const context = useContext(AuthContext)
    return context
}