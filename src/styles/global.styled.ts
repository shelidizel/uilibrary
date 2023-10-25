"use client"
import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400&family=Source+Code+Pro:wght@200&display=swap');

body {
    margin: 0;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
`

export default GlobalStyles