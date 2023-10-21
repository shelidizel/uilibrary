"use client"
import { ButtonProps } from '../../../types/propTypes'
import { ButtonTittle, MyButton, } from './buttonElements'



const Button = ({label, type, buttonColor}: ButtonProps) => {
  return (
    <MyButton type='submit' style={{backgroundColor : buttonColor}}>
        <ButtonTittle>{label}</ButtonTittle>
    </MyButton>
  )
}

export default Button