"use client"
import React from 'react'
import { Container, FisrtLineTittle, SecondLineTittle } from './hero_section_elements'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <Container>
        <FisrtLineTittle>Future of work</FisrtLineTittle>
        <SecondLineTittle>Done by essos</SecondLineTittle>
    </Container>
  )
}

export default HeroSection