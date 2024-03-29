
import styled from "styled-components";

export const Container = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
`

export const Input = styled.input`
width: 100%;
padding: 1rem 1.2rem;
border: 1px solid #dadce0;
border-radius: 4px;
font-size: 1rem;
outline-color: transparent;


&:focus {
    border: 3px solid #1ca34d;
}
&:not(:placeholder-shown) + span,

&:focus + span {
    color: #1ca34d;
    transform: translateX(10px) translateY(-25px);
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0 6px;
    background-color: #fff;
}

&:not(:focus) + span {
   color: #808080;
}
`

export const Label = styled.span`
position: absolute;
left: 0;
padding-left: 1rem;
font-size: 1rem;
color: #879c34;
pointer-events: none;
transition: 0.6s;
`