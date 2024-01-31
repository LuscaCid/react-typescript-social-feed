import { Container, LabelContainer, InputContainer } from "./InputStyles"
import { OnlyInputProperties, variantType } from "../@types/Input-Label-ContainerTypes"
import { ChangeEvent } from "react"


interface props {
    labelTitle : string
    isLabel? : boolean
    input : OnlyInputProperties
    variantInputFormat : variantType
    onChangeFunction : (e : ChangeEvent<HTMLInputElement>) => void
    

}
export const InputAndOrLabel = (props : props) => {
    return (
        <Container>
            {props.isLabel && (
                <LabelContainer>
                    {props.labelTitle}
                </LabelContainer>
            )}
            <InputContainer 
                onChange={props.onChangeFunction}
                variantTypeFormat = {props.variantInputFormat}
                placeholder={props.input.placeholder}
                type={props.input.type}
                id={props.input.id}
            />
        </Container>
        
    )
}