# welcome to another amazing project made with typescript and react. 

ts a very happy moment in my life, learn a lot of things that performing with all theses amazing technologies.

‘‘‘ bash
npm install
npm run dev
‘‘‘

## training with types and interfaces in react.js 

‘‘‘js
export interface IAuthorizedUserInfo {
    user_id : number //that becomes from backend
    name : string
    profile_img_url : string //that searches in database
    banner_img_url : string
    role : string
}

export type LoginInfo = { username? : string, email? : string, password : string }

export interface IAuthUserContext extends IAuthorizedUserInfo {
    signIn : ({username, email, password} : LoginInfo) => boolean
}
‘‘‘