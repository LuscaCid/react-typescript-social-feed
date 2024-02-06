import styles from './SignUp.module.css'
import {Container} from ''
export const SignUp = () => {
    
    const [emailOrPhoneValue, setEmailOrPhoneValue] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    const {register, handleSubmit} = useForm<NewSessionCreateData>({
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
    
    const handleLogin = async (data: NewSessionCreateData) : Propmise<void> => {
        await conn.post('/')
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
                            placeholder = "Email ou Usuário"
                            variantTypeFormat = "primary"
                            type = "text"
                            {...register('emailOrUsername')} 
                        />
                        <Input 
                            icon={FaLock}
                            onChangeFunction={handleChangeInputs}
                            id="password"
                            placeholder = "password"
                            variantTypeFormat = "primary"
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