
import { SignInAndSignUpSessions, SignInContainer } from '../SignIn/SignInContainer'
import { ButtonSignInSignUpPages } from '../SignIn/SignInContainer'
import { FaUserAstronaut } from "react-icons/fa";
import { PiMoonStarsThin } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { conn } from '../../service/api'
import {FaLock} from 'react-icons/fa'
import * as zod from 'zod'
import {Container, InputContainer} from '../../components/InputStyles'
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

const zodModelDataFormRegister = zod.object({
    email : zod.string().min(1),
    password :  zod
    .string()
    .min(5),
    confirmPassword : zod.string().min(5),
    username : zod.string().min(5),

})
type NewSessionCreateDataRegister = zod.infer<typeof zodModelDataFormRegister>


export const SignUp = () => {
    
    /*function reducer(state : number, action : {type : string, payload : {data : any}} ){
        if(action.type == "change_value_of_Age"){
            return state = action.payload.data
        }
    }*/
    //const [username, dispatch] = useReducer(reducer, {age : 42})

    //dispatch({type : "change_value_of_Age", payload : {data : 4}})

    //console.log(username)
    const {register, handleSubmit, watch} = useForm<NewSessionCreateDataRegister>({
        resolver : zodResolver(zodModelDataFormRegister),
        defaultValues : {
            email : "", 
            password : "",
            username : "",
            confirmPassword : ""
        }
    })
    
    const navigate= useNavigate()
    
    const handleCreateNewAccount = async (data: NewSessionCreateDataRegister) : Promise<void> => {
        await conn.post('/')
    }
    

    const password = watch('password')

    useEffect(() => {
        let passwordHasSaveValues : boolean= false;

        for(let i = 0; i < password.length; i++){
            passwordHasSaveValues = password[i] == typeof 'number' ? true : false
            if(passwordHasSaveValues)return 

        }
        const passwordHasUncommonValues = password.includes("@") || password.includes('!')
        
        
    }, [password])

    return (
        <SignInContainer>
                <aside>
                    <h1>SocialFeed</h1>
                    <p>Uma rede social minimalista para você que procura um lugar clean, rapido, performático e divertido, para todas as idades, dev ou nao!.</p>
                    <PiMoonStarsThin size={120}/>
                </aside>
                <SignInAndSignUpSessions>
                    <form onSubmit={handleSubmit(handleCreateNewAccount)}>
                    
                        <Container>
                            <HiOutlineMail size={15} />
                            <InputContainer
                                id='email'
                                type='email'
                                varianttypeformat='primary'
                                placeholder = "e-mail"
                                {...register('email')}
                            />
                        </Container>
                        <Container>
                            <FaUserAstronaut size={15}/>
                        <InputContainer
                                id='username'
                                type='text'
                                varianttypeformat='primary'
                                placeholder = "username"
                                {...register('username')}
                            />
                        </Container>
                        <Container>
                            <FaLock size= {15}/>
                        <InputContainer
                                id='password'
                                type='text'
                                varianttypeformat='primary'
                                placeholder = "password"
                                {...register('password')}
                            />
                        </Container>
                        <Container>
                        <   FaLock size= {15}/>
                            <InputContainer
                                id='password'
                                varianttypeformat='primary'
                                type='text'
                                placeholder = "confirm Password"
                                {...register('confirmPassword')}
                            />
                        </Container>
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