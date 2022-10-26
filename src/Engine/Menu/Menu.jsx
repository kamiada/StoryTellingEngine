import React from "react";
import { Container, Title, Paragraph, MenuHolder, Navigation } from "./Menu.styles";
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
        <Navigation>
        <Link style={{margin: "5px"}} to="/scene">Start Creating Your Own Visual Novel</Link>
        <Link to="/tutorial">Check out tutorial to learn how the engine works!</Link>
      </Navigation>
      </MenuHolder>
    </Container>
  );
};

export default Menu;
