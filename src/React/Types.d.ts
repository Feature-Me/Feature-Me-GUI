type FunctionWithTypedProps<T> = { exec(value: T): void }["exec"];

interface propsType {
    className?:string
    accentColor?:string
}

interface buttonPropsType extends propsType {
    children: React.ReactNode
    onClick?: FunctionWithTypedProps<MouseEvent<HTMLButtonElement>>
}