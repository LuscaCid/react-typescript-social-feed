
import {SignInAndSignUpSessions, SignInContainer} from './SignInContainer'
import  { ChangeEvent, useState } from 'react'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'
import {ButtonSignInSignUpPages} from './SignInContainer'
//import { conn } from '../../service/api'
import { HiOutlineMail } from "react-icons/hi";
import {FaLock} from 'react-icons/fa'
import { PiMoonStarsThin } from 'react-icons/pi'


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
    
    const {register, handleSubmit} = useForm<NewSessionCreateData>({
        resolver : zodResolver(zodModelDataForm),
        defaultValues : {emailOrUsername : "", password : ""}
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
    
    const handleLogin = async (data: NewSessionCreateData) : Promise<void> => {
        console.log(data) //only for tests
    }
    
    return (
        <SignInContainer>
                <aside>
                    <h1>SocialFeed</h1>
                    <p>Uma rede social minimalista para você que procura um lugar clean, rapido, performático e divertido, para todas as idades, dev ou nao!.</p>
                    <PiMoonStarsThin size={120}/>
                </aside>
                <SignInAndSignUpSessions>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <Input 
                            icon={HiOutlineMail}
                            onchange={handleChangeInputs} 
                            id="email"
                            placeholder = "Email ou Usuário"
                            varianttypeformat = "primary"
                            type = "text"
                            {...register('emailOrUsername')} 
                        />
                        <Input 
                            icon={FaLock}
                            onchange={handleChangeInputs}
                            id="password"
                            placeholder = "password"
                            varianttypeformat='primary'
                            type = "password" 
                            {...register('password')}
                            />
                        
                            <ButtonSignInSignUpPages>
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