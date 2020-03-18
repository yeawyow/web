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
              img="2"
              name="นางสาวศุภมาศ อุ่นสากล"
              posit="นายแพทย์เชี่ยวชาญ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="3"
              name="นางจิรัฐติกาล สุตวนิชย์"
              posit="นายแพทย์ชำนาญการพิเศษ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="3"
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
              img="2"
              name="นางสาวรุจิรา งิ้วโสม"
              posit="พยาบาลวิชาชีพชำนาญการพิเศษ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="3"
              name="นางรัศมี พิมพ์ศรี"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="3"
              name="นางสาวอรพิน คชพิมพ์"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="3"
              name="นางนวภรณ์ วงค์วันดี"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
        </Row>
        <p></p>
        <Row>
          <Col>
            <DirectorsList
              img="2"
              name="นางอัคพิน สุริวรรณ์"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="3"
              name="นายจินดา พลสุวรรณ"
              posit="นักวิชาการสาธารณสุขชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="3"
              name="นายอดิศักดิ์ ผานะวงค์"
              posit="นักวิชาการสาธารณสุขชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="3"
              name="นางสาวเจนนิสา บุพสิริ"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
        </Row>
        <p></p>
        <Row>
          <Col>
            <DirectorsList
              img="2"
              name="นายคมสัน รังวารี"
              posit="นักเทคนิคการแพทย์ชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="3"
              name="นางสาวมาระตี ไชยรบ"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="3"
              name="นางพิมพา พรมสิทธิ์"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
          <Col>
            <DirectorsList
              img="3"
              name="นางรุ่งนภา ขจรเพชร"
              posit="พยาบาลวิชาชีพชำนาญการ"
            ></DirectorsList>
          </Col>
        </Row>
        <Row>
          <Col>
            <DirectorsList
              img="4"
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
  //const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article>
      <Image width="171px" height="180px" rounded />
      <h4>{name}</h4>
      <h5>{posit}</h5>
      {children}
    </article>
  );
};
