import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
`
export const Content = styled(Dialog.Content)`
  :focus{
    outline: none;
    box-shadow: none;
  }
  background: black;
  width: 43rem;
  padding: 2rem 3rem;
  border-radius: 6px;
  color: var(--gray-100);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-left: 1px solid var(--green-500);
`

export const CloseButton = styled(Dialog.Close)`
  background: none ;
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
  color: white;
  &:hover{
    opacity: 0.6;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  >input {
    width: 100%;
    padding:.7rem 1rem;
    border-radius: 0.4rem;
    border: 1px solid var(--green-500);
    color: var(--gray-100);
    background: var(--gray-900);
  }
  >textarea {
    color: var(--gray-100);
    resize: none;
    width: 100%;
    height: 10rem;
    border-radius: 6px;
    background: var(--gray-900);
    border: 1px solid var(--green-500);
    padding: 1rem;
  }
  >input[type = 'submit']{
    background: var(--gray-900);
    border-radius: 6px;
    border: 1px solid var(--green-500);
    cursor: pointer;
    color: var(--gray-100);
    padding:.7rem 3rem;
    transition: background 0.12s;
    &:hover{
      background: var(--green-500);
      color: var(--gray-100);
    }
  }
`