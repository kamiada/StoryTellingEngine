import React from "react";
import { Container, StyledButton } from "./Button.styles";

export const Button = (path, icon) => {
    const handleClick = () => {
        console.log('Click happened');
      };
return(
    <Container>
        <StyledButton onClick={() => handleClick()} path={path} />
    </Container>
)
}

export default Button;