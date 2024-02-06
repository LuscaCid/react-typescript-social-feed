import { Container, InputContainer } from "./InputStyles"
import { OnlyInputProperties  } from "../@types/Input-Label-ContainerTypes"

export const Input = ({ id, name, placeholder, type, varianttypeformat, onChangeFunction, icon : Icon  } : OnlyInputProperties) => {
    return (
        <Container>
            {Icon && <Icon/>}
            <InputContainer 
                onChangeFunction={onChangeFunction}
                varianttypeformat={varianttypeformat}
                placeholder={placeholder}
                type={type}
                id={id}
                name = {name}
            />
        </Container>
        
    )
}