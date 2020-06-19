import React from "react";
import Menu from "../Component/Menu";
import { Container, Image } from "react-bootstrap";
import logohos from "./Images/logohos.png";
import styled from "styled-components";
const Styles = styled.div`
  .navbar {
    margin: 10px;
  }
  .nav-link {
    margin: 20px;
  }
  .thumbnail {
    width: 100%;
    max-width: 600px;
    height: auto;
  }
`;
export default function Header() {
  return (
    <div>
      <Styles>
        <Container>
          <Image className="thumbnail" src={logohos} />
        </Container>
      </Styles>

      <Menu />
    </div>
  );
}
