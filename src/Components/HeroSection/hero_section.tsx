"use client"
import React from 'react'
import { Container, FisrtLineTittle, SecondLineTittle } from './hero_section_elements'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <Container>
        <FisrtLineTittle/>
        <SecondLineTittle/>
    </Container>
  )
}

export default HeroSection