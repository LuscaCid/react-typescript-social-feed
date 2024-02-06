import { ChangeEvent } from "react"

export type variantType = 'primary' | 'pill'

export type LabelContainerType = {
    fontsize? : number
    hasBorderBottom? : boolean
}

export interface OnlyInputProperties { 
    name : string
    placeholder : string
    type : 'text' | 'password' | 'email' | "file"
    id : string
    variantTypeFormat : variantType
    onChangeFunction : (e : ChangeEvent<HTMLInputElement>) => void 
}