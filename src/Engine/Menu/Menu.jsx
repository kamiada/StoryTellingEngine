import React from "react";
import { Container, Title, Paragraph } from "./Menu.styles";
import { Button } from "../components";

export const Menu = () => {

  return (
    <Container>
      <Title>Welcome to Storytelling Engine</Title>
      <Paragraph>
        In order to start building your own visual novel, click the button
        below. If you need a tutorial, please click on the "Start tutorial"
        button{" "}
      </Paragraph>
      <Button onClick={() => console.log("here")} title="Start"></Button>
      <Button onClick={() => console.log("here")} title="Tutorial"></Button>
    </Container>
  );
};

export default Menu;
