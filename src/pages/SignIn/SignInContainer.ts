import styled from 'styled-components'

export const SignInContainer = styled.div`
    align-items: center;
    border-radius: .4rem;
    padding : 4rem 2rem;
    background : var(--gray-700);
    display: flex;
    gap: 2rem;

    flex-direction : row;
    width : min(74rem, 90%);
    align-items: flex-start;
    margin: 12rem auto;
    justify-content: space-between;
    aside {
        h1{
            font-size: 3rem;
        }
        &:nth-child(2){
            font-size: 2rem;
        }
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 2rem; 
    }
    @media(max-width:45rem){
        display:flex;
        flex-direction:column;
        width: 100%;
        align-items:center;
        form{
            width:100%;
        }
    }
`

export const SignInAndSignUpSessions = styled.div`
    display: flex;
    flex-direction : column; 
    gap: 2rem ;
    align-items: center;
    form {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        transition: background 0.15s ;
        button {
            background: var(--green-500) ;
        }
        button:hover{
            background: transparent;
        }
    }
    >span {
        display: flex;
        align-items: center;

    }
    @media(max-width:45rem){
        width: 100%;
    }
`
export const ButtonSignInSignUpPages = styled.button`
    border : 1px solid var(--green-500);
    border-radius: 0.4rem ;
    background:none ;
    transition: background 0.15s;
    color: var(--gray-300) ;
    padding: 1rem;
    width: 100%;
    &:hover{
        background: var(--green-500);
        color: var(--gray-100);
    }

`