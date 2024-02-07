//import { ImgHTMLAttributes } from "react"

import { ReducerAction } from "react"

type SecurityInfoType = {
    email : string
    password : string
    username : string
}

export interface IAuthorizedUserInfo {
    user_id? : number //that becomes from backend
    biograPhy? : string
    sensivityInfo? : SecurityInfoType
    role? : string
    name? : string
    profile_img_url? : string //that searches in database
    banner_img_url? : string
}

export type LoginInfo = { 
    username : string, 
    email : string, 
    password : string 
}

export type SignInResponse = {
    user? : IAuthorizedUserInfo
    token? : string
}
export type State = IAuthorizedUserInfo

export type Action = 
    {type : "loggon", payload : {username? : string, email? : string, password : string} }|
    {type : "editUsername", payload : {newUsername : string}} |
    {type : "editEmail", payload : {newEmail : string}} |
    {type : "editPassword", payload : {newPassword : string, oldPassword: string}}

export interface IAuthUserContext   {
    signIn : ({username, email, password} : LoginInfo) => SignInResponse
    signUp : ({username, email, password} : LoginInfo) => boolean
    updateProfileImage : (file : File) => boolean
    user : IAuthorizedUserInfo,
    state : IAuthorizedUserInfo,
    updateUsername : (newUsername : string) => void
 }

/**
 * no feedcontext eu posso pegar o id do usuario e buscar posts para 
 * aglomerar no feed dele que estao relacionados as pessoas que ele segue
 * entao o authContext emgloba o feedContext
 */