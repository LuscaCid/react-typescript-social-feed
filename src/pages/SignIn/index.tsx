
import {SignInAndSignUpSessions, SignInContainer} from './SignInContainer'
import  { ChangeEvent, useState } from 'react'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { NavLink } from 'react-router-dom'
import {ButtonToRegister} from './SignInContainer'
interface CreateSessionFormProps {
    email : string
    passworwd : string
    handleLogin : (data : DataFromSubmit) => void
    data : DataFromSubmit
}

interface DataFromSubmit {
    emailOrUsername : string
    password :string
}

const newSessionCreateData = zod.object({
    emailOrUsername : zod.string(),
    password :  zod.string()
})
type NewSessionCreateData = zod.infer<typeof newSessionCreateData>

export const SignIn = () => {

    
    const [emailOrPhoneValue, setEmailOrPhoneValue] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {register, watch, handleSubmit} = useForm<NewSessionCreateData>()

    const handleChangeInputs = (e : ChangeEvent<HTMLInputElement>) => {
        if(e.target.name == "emailorphone"){
            setEmailOrPhoneValue(e.target.value)
            console.log(emailOrPhoneValue, "valor do emailk")
        } else {
            setPassword(e.target.value)
            console.log('valor do pass', password)
        }
        
    }
    
    const handleLogin = (data: NewSessionCreateData) : void => {
        
        
    }
    
    return (
        <SignInContainer>
            
            
                <aside>
                    <h1>SocialFeed</h1>
                    <p>Uma rede social minimalista para você que procura um lugar calmo e dev.</p>
                </aside>
                <SignInAndSignUpSessions>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <Input 
                        
                            onChangeFunction={handleChangeInputs} 
                            id="email"
                            name = "email"
                            placeholder = "Email ou Usuário"
                            variantTypeFormat = "primary"
                            type = "text" 
                        />
                        <Input 
                            onChangeFunction={handleChangeInputs}
                            id="password"
                            name = "password"
                            placeholder = "password"
                            variantTypeFormat = "primary"
                            type = "password" 
                            />
                        <button type='submit'>
                            Entrar
                        </button>
                    </form>
                    <span>Ou</span>
                    <ButtonToRegister>
                        Registrar
                    </ButtonToRegister>
                    
                </SignInAndSignUpSessions>
                
        </SignInContainer>
        
    )
}