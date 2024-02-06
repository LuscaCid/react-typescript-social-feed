import styled from 'styled-components'

export const SignInContainer = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction : column;
    width : 80rem;
    height: 50rem;
    margin: auto;
`

export const SignInAndSignUpSessions = styled.div`
    display: flex;
    flex-direction : column; 
    gap: 2rem ;

    >span {
        display: flex;
        align-items: center;

    }
`
export const ButtonToRegister = styled.button`
    border : 1px solid var(--green-500);
    border-radius: 0.4rem ;
    background:none ;
    transition: background 0.15s;
    color: var(--gray-100) ;
    &:hover{
        background: var(--green-500);
    }

`