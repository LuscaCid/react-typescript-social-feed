
import {SignInAndSignUpSessions, SignInContainer} from './SignInContainer'
import { InputContainer, Container } from '../../components/InputStyles'
import {ButtonSignInSignUpPages} from './SignInContainer'
import {zodResolver} from '@hookform/resolvers/zod'
import { PiMoonStarsThin } from 'react-icons/pi'
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {FaLock} from 'react-icons/fa'
import * as zod from 'zod'
import { useAuth } from '../../hook/AuthContext'
import { IAuthUserContext } from '../../interfaces/AuthInterface'
//import { conn } from '../../service/api'

const zodModelDataForm = zod.object({
    emailOrUsername : zod.string(),
    password :  zod.string(),
    
})

type NewSessionCreateData = zod.infer<typeof zodModelDataForm>

export const SignIn = () => {

    const { updateUsername } = useAuth()
    const {register, handleSubmit, reset, watch} = useForm<NewSessionCreateData>({
        resolver : zodResolver(zodModelDataForm),
        defaultValues : {emailOrUsername : "", password : ""}
    })
    
    const navigate= useNavigate()
    
    const handleSignIn = async (data: NewSessionCreateData) : Promise<void> => {
        console.log(data) //only for tests
        updateUsername('lucaségay')
        reset()
    }
    
    const task = watch('emailOrUsername')

    const isSubmitable = !task
    console.log(task)
    return (
        <SignInContainer>
                <aside>
                    <h1>SocialFeed</h1>
                    <p>Uma rede social minimalista para você que procura um lugar clean, rapido, performático e divertido, para todas as idades, dev ou nao!.</p>
                    <PiMoonStarsThin size={120}/>
                </aside>
                <SignInAndSignUpSessions>
                    <form onSubmit={handleSubmit(handleSignIn)}>
                        <Container>
                            <HiOutlineMail size={15}/>
                            <InputContainer 
                                id="email"
                                placeholder = "Email ou Usuário"
                                varianttypeformat = "primary"
                                type = "text"
                                {...register('emailOrUsername')} 
                            />
                        </Container>
                        <Container>
                            <FaLock size={15}/>
                            <InputContainer     
                                id="password"
                                placeholder = "password"
                                varianttypeformat='primary'
                                type = "password" 
                                {...register('password')}
                            />
                        </Container>
                        
                        <ButtonSignInSignUpPages 
                            disabled = {!!isSubmitable }
                            type='submit'>
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