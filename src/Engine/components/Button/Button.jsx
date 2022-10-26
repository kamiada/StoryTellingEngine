import React from "react";
import { Container, StyledButton } from "./Button.styles";

export const Button = (props) => {
return(
    <Container>
        <StyledButton onClick={() => props.handleClick()} path={props.path}>{props.title}</StyledButton>
    </Container>
)
}

export default Button;