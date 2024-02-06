import { Container, InputContainer } from "./InputStyles"
import { OnlyInputProperties  } from "../@types/Input-Label-ContainerTypes"

export const Input = ({ id,name, placeholder,type,variantTypeFormat, onChangeFunction  } : OnlyInputProperties) => {
    return (
        <Container>
            <InputContainer 
                onChangeFunction={onChangeFunction}
                variantTypeFormat={variantTypeFormat}
                placeholder={placeholder}
                type={type}
                id={id}
                name = {name}
            />
        </Container>
        
    )
}