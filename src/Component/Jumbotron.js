import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import hosband from "../Component/Images/intro.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${hosband});
    background-size: cover;
    width: 1024px;
    height: 768px;
    display: block;
    margin: 0 auto;
  }
`;
export const Jumbotron = () => (
  <Styles>
    <div>
      <Jumbo className="jumbo">
        <Container>
          {/*}
        <h1>โรงพยาบาลอากาศอำนวย ยินดีต้อนรับ</h1>
        <p>
          <h4>
            วิสัยทัศน์ (Vision) : เป็นโรงพยาบาลที่มีคุณภาพ ร่วมสร้างเสริมสุขภาพ
            ประทับใจบริการ
          </h4>
        </p>
        <p></p>
<p></p>{*/}
        </Container>
      </Jumbo>
      <hr></hr>
    </div>
  </Styles>
);
