import styled from 'styled-components'

export const StyledH1 = styled.h1`
color: hsl(0, 0%, 28%);
font-size: 4rem;
letter-spacing: 7px;
cursor: pointer;

span {
    transition: 0.5s ease-out;
}

&:hover span:nth-child(1) {
    margin-right: 5px;
}

&:hover span:nth-child(1):after {
    content : "'";
}
&:hover span:nth-child(2) {
    margin-left: 30px;
}

&:hover span {
 color: #fff;
 text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
}
`
