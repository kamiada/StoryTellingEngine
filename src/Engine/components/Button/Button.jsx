import React from "react";
import { Container, StyledButton } from "./Button.styles";

export const Button = (onClick, path, icon) => {
return(
    <Container>
        <StyledButton onClick={onClick} path={path} />
    </Container>
)
}

export default Button;