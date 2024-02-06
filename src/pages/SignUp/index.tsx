
import {SignInAndSignUpSessions, SignInContainer} from '../SignIn/SignInContainer'
import  { ChangeEvent, useState } from 'react'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'
import {ButtonSignInSignUpPages} from '../SignIn/SignInContainer'
import { conn } from '../../service/api'
import { HiOutlineMail } from "react-icons/hi";
import {FaLock} from 'react-icons/fa'


const zodModelDataFormRegister = zod.object({
    emailRegister : zod.string().min(1),
    passwordRegister :  zod
    .string()
    .min(5),
    
    username : zod.string().min(1),

})


type NewSessionCreateDataRegister = zod.infer<typeof zodModelDataFormRegister>

import {Container} from ''
export const SignUp = () => {
    
    const [emailOrPhoneValue, setEmailOrPhoneValue] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    const {register, handleSubmit, watch} = useForm<NewSessionCreateDataRegister>({
        defaultValues : {
            emailRegister : "", 
            passwordRegister : "",
            username : ""
        }
    })
    
    const navigate= useNavigate()
    const handleChangeInputs = (e : ChangeEvent<HTMLInputElement>) => {
        if(e.target.name == "emailorphone"){
            setEmailOrPhoneValue(e.target.value)
            console.log(emailOrPhoneValue, "valor do emailk")
        } else {
            setPassword(e.target.value)
            console.log('valor do pass', password)
        }
        
    }
    
    const handleLogin = async (data: NewSessionCreateData) : Propmise<void> => {
        await conn.post('/')
    }
    
    return (
        <SignInContainer>
                <aside>
                    <h1>SocialFeed</h1>
                    <p>Uma rede social minimalista para você que procura um lugar clean, rapido, performático e divertido, para todas as idades, dev ou nao!.</p>
                </aside>
                <SignInAndSignUpSessions>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <Input 
                            icon={HiOutlineMail}
                            onChangeFunction={handleChangeInputs} 
                            id="email"
                            placeholder = "Email ou Usuário"
                            varianttypeformat = "primary"
                            type = "text"
                            {...register('emailOrUsername')} 
                        />
                        <Input 
                            icon={FaLock}
                            onChangeFunction={handleChangeInputs}
                            id="password"
                            placeholder = "password"
                            varianttypeformat = "primary"
                            type = "password" 
                            {...register('password')}
                            />
                        
                            <ButtonSignInSignUpPages type= "submit">
                                SignIn
                            </ButtonSignInSignUpPages>
                        
                    </form>
                    <span>Ou</span>
                    
                    <ButtonSignInSignUpPages
                    onClick = {() => {
                        navigate('/register')
                    }}>
                        SignUp
                    </ButtonSignInSignUpPages>
                    
                </SignInAndSignUpSessions>
                
        </SignInContainer>
        
    )
}