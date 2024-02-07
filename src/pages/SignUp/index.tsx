
import { SignInAndSignUpSessions, SignInContainer } from '../SignIn/SignInContainer'
import { ButtonSignInSignUpPages } from '../SignIn/SignInContainer'
import { FaUserAstronaut } from "react-icons/fa";
import { PiMoonStarsThin } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { ChangeEvent, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import { conn } from '../../service/api'
import {FaLock} from 'react-icons/fa'
import * as zod from 'zod'


const zodModelDataFormRegister = zod.object({
    emailRegister : zod.string().min(1),
    passwordRegister :  zod
    .string()
    .min(5),
    username : zod.string().min(1),

})
type NewSessionCreateDataRegister = zod.infer<typeof zodModelDataFormRegister>


export const SignUp = () => {
    
    /*function reducer(state : number, action : {type : string, payload : {data : any}} ){
        if(action.type == "change_value_of_Age"){
            return state = action.payload.data
        }
    }*/
    const [emailOrPhoneValue, setEmailOrPhoneValue] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    //const [username, dispatch] = useReducer(reducer, {age : 42})

    //dispatch({type : "change_value_of_Age", payload : {data : 4}})

    //console.log(username)
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
    
    const handleCreateNewAccount = async (data: NewSessionCreateDataRegister) : Promise<void> => {
        await conn.post('/')
    }
    
    return (
        <SignInContainer>
                <aside>
                    <h1>SocialFeed</h1>
                    <p>Uma rede social minimalista para você que procura um lugar clean, rapido, performático e divertido, para todas as idades, dev ou nao!.</p>
                    <PiMoonStarsThin size={120}/>
                </aside>
                <SignInAndSignUpSessions>
                    <form onSubmit={handleSubmit(handleCreateNewAccount)}>
                        <Input 
                            icon={FaUserAstronaut}
                            onchange={handleChangeInputs} 
                            id="username"
                            placeholder = "Username"
                            varianttypeformat = "primary"
                            type = "text"
                            {...register('username')} 
                        />
                        <Input 
                            icon={HiOutlineMail}
                            onchange={handleChangeInputs} 
                            id="email"
                            placeholder = "E-mail"
                            varianttypeformat = "primary"
                            type = "text"
                            {...register('emailRegister')} 
                        />
                        <Input 
                            icon={FaLock}
                            onchange={handleChangeInputs}
                            id="password"
                            placeholder = "password"
                            varianttypeformat = "primary"
                            type = "password" 
                            {...register('passwordRegister')}
                            />
                        
                            <ButtonSignInSignUpPages type= "submit">
                                Register
                            </ButtonSignInSignUpPages>
                        
                    </form>
                    <span>Ou</span>
                    
                    <ButtonSignInSignUpPages
                    onClick = {() => {
                        navigate(-1)
                    }}>
                        SignIn
                    </ButtonSignInSignUpPages>
                    
                </SignInAndSignUpSessions>
                
        </SignInContainer>
        
    )
}