
import styles from './SignUp.module.css'
import react, { ChangeEvent, FormEvent, useState } from 'react'

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
                    <input 
                        name='emailorphone'
                        onChange={handleChangeInputs}
                        value={emailOrPhoneValue}
                        type="text"
                     />
                     <input 
                        name='password'
                        onChange={handleChangeInputs}
                        value={password}
                        type="password"
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