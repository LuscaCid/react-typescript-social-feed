import {BrowserRouter} from 'react-router-dom'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './Auth.routes'
import { useAuth } from '../hook/AuthContext'

export const Routes = () => {
    const user = useAuth()
    console.log(user, "useAuth")
    return (
        <BrowserRouter>
            {user ? (<AppRoutes/> ): (<AuthRoutes/>)}
        </BrowserRouter> 
    )
}