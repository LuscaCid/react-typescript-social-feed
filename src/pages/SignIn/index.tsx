
import styles from './SignUp.module.css'
import react, { ChangeEvent, FormEvent, useState } from 'react'
import { InputAndOrLabel } from '../../components/Input'

export const SignIn = () => {

    const [emailOrPhoneValue, setEmailOrPhoneValue] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleChangeInputs = (e : ChangeEvent<HTMLInputElement>) => {
        if(e.target.name == "emailorphone"){
            setEmailOrPhoneValue(e.target.value)
            console.log(emailOrPhoneValue, "valor do emailk")
        } else {
            setPassword(e.target.value)
            console.log('valor do pass', password)
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
                        
                        onChangeFunction={handleChangeInputs} 
                        inputProps={
                            {
                                id : "email", 
                                placeholder : "email or phone number",
                                variantTypeFormat : 'PRIMARY',
                                type : 'text' ,
                                name : "emailorphone"
                            }}
                    />
                     <InputAndOrLabel 
                        onChangeFunction={handleChangeInputs}
                        labelTitle='Email ou username'
                        inputProps={
                            {
                                id : "password", 
                                placeholder : "password",
                                variantTypeFormat : 'PRIMARY',
                                type : 'password' ,
                                name : "password"
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