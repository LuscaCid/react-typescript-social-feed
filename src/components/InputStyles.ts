import styled from 'styled-components'
import type {LabelContainerType, OnlyInputProperties } from '../@types/Input-Label-ContainerTypes'

export const InputContainer = styled.input<OnlyInputProperties>`
   
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
`

export const LabelContainer = styled.label<LabelContainerType>`
    
`