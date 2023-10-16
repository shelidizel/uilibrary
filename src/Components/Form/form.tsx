"use client"
import React from 'react'
import { FormProps } from '../../../types/propTypes'
import { FormContainer, FormTitle } from './formElements'



const Form = ({children, title} : FormProps) => {
  return (
    <FormContainer>
        <FormTitle> {title}</FormTitle>
        {children}
    </FormContainer>
  )
}

export default Form