type FunctionWithTypedProps<T> = { exec(value: T): void }["exec"];

interface propsType {
    className?:string
}

interface selectContents{
    value:any
    label:React.ReactNode
}

type buttonPropsType = JSX.IntrinsicElements["button"] & {
    accentColor?: string
}

interface rangeInputPropsType extends propsType {
    min?:number
    max?:number
    step?:number
    value?:number
    size?:"tiny"|"fit"|"large"
    onChange?:FunctionWithTypedProps<number>
}

interface horizonalSelectPropsType extends propsType {
    contents:Array<selectContents>
    onChange?:FunctionWithTypedProps<selectContents>
    value:selectContents
}

interface selectBoxPropsType extends propsType {
    contents: Array<selectContents>,
    onChange?: FunctionWithTypedProps<selectContents>
    value: inputContents 
}

interface selectBoxSelectorPropsType {
     isOpen: boolean,
     setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
     contents: Array<selectContents>,
     onChange: FunctionWithTypedProps<selectContents>,
     setValue: React.Dispatch<React.SetStateAction<any>>,
     setLabel: React.Dispatch<React.SetStateAction<React.ReactNode>>
}