export interface InputFieldProps {
    label : string,
    type? : string
}

export interface FormProps {
    children : React.ReactNode,
    title : string
}

export interface ButtonProps {
    label : string;
    buttonColor : string;
    type? : string;
}