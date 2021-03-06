import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import intro from "../Component/Images/intro.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${intro}) no-repeat fixed bottom;
    background-size: cover;
    height: 350px;
    position: relative;
    z-index: -2;
  }
  color: white;
`;
export const Intro = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <Container>
        <h1>โรงพยาบาลอากาศอำนวย ยินดีต้อนรับ</h1>
        <p>
          <h4>
            วิสัยทัศน์ (Vision) : เป็นโรงพยาบาลที่มีคุณภาพ ร่วมสร้างเสริมสุขภาพ
            ประทับใจบริการ
          </h4>
        </p>
        <p></p>
        <p></p>
      </Container>
    </Jumbo>
  </Styles>
);
