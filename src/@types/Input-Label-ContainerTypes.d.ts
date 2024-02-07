import { ChangeEvent } from "react"

export type variantType = 'primary' | 'pill'

export type LabelContainerType = {
    fontsize? : number
    hasBorderBottom? : boolean
}

export interface OnlyInputProperties {
    rest? : any
    icon? : any 
    name : string
    placeholder : string
    type : 'text' | 'password' | 'email' | "file"
    id : string
    varianttypeformat : variantType
    //onchange? : (e : ChangeEvent<HTMLInputElement>) => void 
}