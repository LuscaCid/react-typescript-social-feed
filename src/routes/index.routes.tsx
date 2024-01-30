import {BrowserRouter} from 'react-router-dom'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './Auth.routes'
import { useAuth } from '../hook/AuthContext'
import { IAuthUserContext } from '../interfaces/AuthInterface'
import { IAuthorizedUserInfo } from '../interfaces/AuthInterface'

export const Routes = () => {
    const data : IAuthUserContext| undefined= useAuth()
    const user : IAuthorizedUserInfo | undefined  = data?.user
    //if user is authenticated, return appRoutes
    return (
        <BrowserRouter>
            {user ? (<AppRoutes/> ): (<AuthRoutes/>)}
        </BrowserRouter> 
    )
}