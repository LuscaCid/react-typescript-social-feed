import { ImgHTMLAttributes } from "react"

export interface IAuthorizedUserInfo {
    user_id : number //that becomes from backend
    name : string
    profile_img_url : string //that searches in database
    banner_img_url : string
    role : string
}

export type LoginInfo = { username? : string, email? : string, password : string }

export type SignInResponse = {
    user? : IAuthorizedUserInfo
    token? : string
}

interface InputFile {
    name: string;
    size: number;
    type: string;
    lastModified: number;
    // Adicione outros campos relevantes conforme necessário
  }
  

export interface IAuthUserContext   {
    signIn : ({username, email, password} : LoginInfo) => SignInResponse
    signUp : ({username, email, password} : LoginInfo) => boolean
    updateProfileImage : (file : File) => boolean
    user : IAuthorizedUserInfo
 }

/**
 * no feedcontext eu posso pegar o id do usuario e buscar posts para 
 * aglomerar no feed dele que estao relacionados as pessoas que ele segue
 * entao o authContext emgloba o feedContext
 */