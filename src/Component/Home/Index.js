import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { ProOnline } from "../ProOnline";
//import { Jumbotron } from "../Jumbotron";
//import DocPup2 from '../DocPup2';
import { Mission } from "../Mission";
import Manerger from "../Images/Director/1.jpg";
import Carousels from "../Carousels";

export const Home = () => (
  <div>
    <React.Fragment>
      <Container fluid>
        <Row>
          <Carousels />
        </Row>
      </Container>
      <br></br>
      <Container fluid>
        <Row>
          <Col lg={{ span: 8, offset: 1 }} xs={12} md={8}>
            <Mission />
            <ProOnline />
          </Col>

          <Col lg={{ span: 1, offset: 1 }} xs={12} md={4}>
            <DirectorsList
              img="1"
              name="นายกิตตินาถ ติยะพิบูลย์ไชยา"
              posit="ผู้อำนวยการโรงพยาบาลอากาศอำนวย"
            ></DirectorsList>
          </Col>
        </Row>
      </Container>

      <p></p>
    </React.Fragment>
  </div>
);
const DirectorsList = ({ name, posit }) => {
  //const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Img variant="top" src={Manerger} />

        <Card.Title>{name}</Card.Title>
        <Card.Text>{posit}</Card.Text>
      </Card.Body>
    </Card>
  );
};
