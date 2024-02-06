
import {SignInAndSignUpSessions, SignInContainer} from './SignInContainer'
import  { ChangeEvent, useState } from 'react'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { NavLink } from 'react-router-dom'
import {ButtonSignInSignUpPages} from './SignInContainer'
import { conn } from '../../service/api'
import { HiOutlineMail } from "react-icons/hi";
import {FaLock} from 'react-icons/fa'
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

const zodModelDataForm = zod.object({
    emailOrUsername : zod.string(),
    password :  zod
    .string()
    .min(5)
})
type NewSessionCreateData = zod.infer<typeof zodModelDataForm>

export const SignIn = () => {

    const [emailOrPhoneValue, setEmailOrPhoneValue] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {register, watch, handleSubmit} = useForm<NewSessionCreateData>({
        defaultValues : {emailOrUsername : "", password : ""}
    })

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
                            icon={HiOutlineMail}
                            onChangeFunction={handleChangeInputs} 
                            id="email"
                            name = "email"
                            placeholder = "Email ou Usuário"
                            variantTypeFormat = "primary"
                            type = "text" 
                        />
                        <Input 
                            icon={FaLock}
                            onChangeFunction={handleChangeInputs}
                            id="password"
                            name = "password"
                            placeholder = "password"
                            variantTypeFormat = "primary"
                            type = "password" 
                            />
                        <ButtonSignInSignUpPages type= "submit">
                            SignIn
                        </ButtonSignInSignUpPages>
                    </form>
                    <span>Ou</span>
                    <ButtonSignInSignUpPages>
                        SignUp
                    </ButtonSignInSignUpPages>
                    
                </SignInAndSignUpSessions>
                
        </SignInContainer>
        
    )
}