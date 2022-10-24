import React from "react";
import { Container } from './Menu.styles';
import { Button } from "../components";

export const Menu = () => {
 return (
    <Container>
        Menu
        <Button onClick={() => console.log("here")} />
    </Container>
 )
}

export default Menu;