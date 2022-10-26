import React from "react";
import { Container, Title, Paragraph, MenuHolder } from "./Menu.styles";
import {
    Link
  } from "react-router-dom";

export const Menu = () => {
    const testingFunction = () => {
        console.log('here');
    };
  return (
    <Container>
      <MenuHolder>
        <Title>Welcome to Storytelling Engine</Title>
        <Paragraph>
          In order to start building your own visual novel, click the button
          below. If you need a tutorial, please click on the "Start tutorial"
          button{" "}
        </Paragraph>
        <nav>
        <Link to="/scene">Start Creating Your Own Visual Novel</Link>
      </nav>
      </MenuHolder>
    </Container>
  );
};

export default Menu;
