
import styles from './SignUp.module.css'
import react, { ChangeEvent, FormEvent, useState } from 'react'
import { InputAndOrLabel } from '../../components/Input'
export const SignIn = () => {
    const [emailOrPhoneValue, setEmailOrPhoneValue] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleChangeInputs = (e : ChangeEvent<HTMLInputElement>) => {
        if(e.target.name == "emailorphone"){
            setEmailOrPhoneValue(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }
    
    const handleLogin = (e : FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        
    }
    return (
        <react.Fragment>
            <main className={styles.signin}>
                <aside>
                    <h1>SocialFeed</h1>
                    <p>Uma rede social minimalista para você que procura um lugar calmo e dev.</p>
                </aside>
                <form className={styles.login}>
                    <InputAndOrLabel 
                        labelTitle='Email ou username'
                        variantInputFormat='primary'
                         
                        input={
                            {
                                id : "email", 
                                placeholder : "email or phone number",
                                variantTypeFormat : 'primary',
                                type : 'text' 
                            }}
                    />
                     <InputAndOrLabel 
                        labelTitle='Email ou username'
                        variantInputFormat='primary'
                        input={
                            {
                                id : "password", 
                                placeholder : "password",
                                variantTypeFormat : 'primary',
                                type : 'password' 
                            }}
                        />
                    <button 
                    onClick={handleLogin}
                    type='submit'>
                        Entrar
                    </button>
                </form>
            </main>
        </react.Fragment>
        
    )
}