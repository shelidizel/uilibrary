import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(125, 125, 125);
    display : block;
    flex-direction: column;
    justify-content: center;
    padding-block: 48px 48px;
    justify-content: space-around;
    margin: 0;
`
export const FisrtLineTittle = styled.h1`
    font-size: 48px;
    font-family : "poppins" ;
    color: white;
    font-weight: 800;
    flex: 1;

`

export const SecondLineTittle = styled.h1`
    font-size: 48px;
    font-family : "poppins" ;
    background: linear-gradient(to right, #f80137, #93e0f0);
    -webkit-background-clip: text;
    background-clip: text;
    color : transparent;
    display: inline;
    font-weight: 800;
    flex: 1;
`