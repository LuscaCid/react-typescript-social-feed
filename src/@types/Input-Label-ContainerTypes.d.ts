export type variantType = 'primary' | 'pill'

export type LabelContainerType = {
    fontsize? : number
    hasBorderBottom? : boolean
}

export interface OnlyInputProperties { 
    placeholder : string
    type : 'text' | 'password' | 'email' | "file"
    id : string
    variantTypeFormat : variantType 
}