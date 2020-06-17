import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  text-align: center;
`;
export const Directors = () => {
  return (
    <Styles>
      <Container>
        <h1>คณะกรรมการบริหารโรงพยาบาล</h1>
        <p></p>
        <Row>
          <Col>
            <DirectorsList
              img="1"
              name="นายกิตตินาถ ติยะพิบูลย์ไชยา"
              posit="ผู้อำนวยการโรงพยาบาลอากาศอำนวย"
            ></DirectorsList>
          </Col>
        </Row>
        <p></p>
        <Row>
          <Col>
            <DirectorsList
              img="4"
              name="นางสาวศุภมาศ อุ่นสากล"
              posit="นายแพทย์เชี่ยวชาญ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="2"
              name="นางจิรัฐติกาล สุตวนิชย์"
              posit="นายแพทย์ชำนาญการพิเศษ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="11"
              name="นายพีระศักดิ์ คำสงค์"
              posit="เภสัชกรชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="3"
              name="นางสาวสุรัจฉรา ชัยราช"
              posit="ทันตแพทย์ปฏิบัติการ"
            ></DirectorsList>
          </Col>
        </Row>
        <p></p>
        <Row>
          <Col>
            <DirectorsList
              img="12"
              name="นางสาวรุจิรา งิ้วโสม"
              posit="พยาบาลวิชาชีพชำนาญการพิเศษ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="7"
              name="นางรัศมี พิมพ์ศรี"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="5"
              name="นางสาวอรพิน คชพิมพ์"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="13"
              name="นางนวภรณ์ วงค์วันดี"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
        </Row>
        <p></p>
        <Row>
          <Col>
            <DirectorsList
              img="10"
              name="นางอัคพิน สุริวรรณ์"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="16"
              name="นายจินดา พลสุวรรณ"
              posit="นักวิชาการสาธารณสุขชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="6"
              name="นายอดิศักดิ์ ผานะวงค์"
              posit="นักวิชาการสาธารณสุขชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="15"
              name="นางสาวเจนนิสา บุพสิริ"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
        </Row>
        <p></p>
        <Row>
          <Col>
            <DirectorsList
              img="17"
              name="นายคมสัน รังวารี"
              posit="นักเทคนิคการแพทย์ชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="14"
              name="นางสาวมาระตี ไชยรบ"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="9"
              name="นางพิมพา พรมสิทธิ์"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="8"
              name="นางรุ่งนภา ขจรเพชร"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
        </Row>
        <Row>
          <Col>
            <DirectorsList
              img=""
              name="นางใบอ่อน ปาปะเพ"
              posit="นักจัดการงานทั่วไปชำนาญการ"
            ></DirectorsList>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};
const DirectorsList = ({ img, name, posit, children }) => {
  const url = `http://akathospital.com/airoffice/indicator_app/modules/directors/${img}.jpg`;
  // const url = `./Images/Director/1.jpg`;
  return (
    <article>
      <Image src={url} width="171px" height="180px" rounded />
      <h4>{name}</h4>
      <h5>{posit}</h5>
      {children}
    </article>
  );
};
