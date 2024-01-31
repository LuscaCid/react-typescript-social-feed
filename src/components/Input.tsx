import { Container, LabelContainer, InputContainer } from "./InputStyles"
import { OnlyInputProperties, variantType } from "../@types/Input-Label-ContainerTypes"
import react from 'react'

interface props {
    labelTitle : string
    isLabel? : boolean
    input : OnlyInputProperties
    variantInputFormat : variantType
    onChange : React.Dispatch<setStateAction<string>>


export const InputAndOrLabel = (props : props) => {
    return (
        <Container>
            {props.isLabel && (
                <LabelContainer>
                    {props.labelTitle}
                </LabelContainer>
            )}
            <InputContainer 
                variantTypeFormat = {props.variantInputFormat}
                placeholder={props.input.placeholder}
                type={props.input.type}
                id={props.input.id}
            />
        </Container>
        
    )
}