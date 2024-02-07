import styled from 'styled-components'
import type {LabelContainerType, OnlyInputProperties } from '../@types/Input-Label-ContainerTypes'

export const InputContainer = styled.input<OnlyInputProperties>`
    width: 100%;
    background: none;
    border: 1px solid var(--green-500); 
    padding: .7rem 3rem;
    border-radius: .4rem;
    color: var(--gray-100);
  
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 0.4rem;
    background: none;
    width: fit-content;
    flex: 1;
    position: relative;
    svg {
        position: absolute;
        top: .8rem;
        left: .8rem;
    }
    @media(max-width:45rem){
        width: 100%;
    }
`

export const LabelContainer = styled.label<LabelContainerType>`
    
`