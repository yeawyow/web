import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { ProOnline } from "../ProOnline";
import { Jumbotron } from "../Jumbotron";
//import DocPup2 from '../DocPup2';
import { Mission } from "../Mission";

export const Home = () => (
  <div>
    <React.Fragment>
      <div className="col-12">
        <Jumbotron />
      </div>
      <Container fluid>
        <Row>
          <div className="col-8">
            <Mission />
            <ProOnline />
          </div>
          <div className="col-4">
            <Row>
              <Col>
                <DirectorsList
                  img="1"
                  name="นายกิตตินาถ ติยะพิบูลย์ไชยา"
                  posit="ผู้อำนวยการโรงพยาบาลอากาศอำนวย"
                ></DirectorsList>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>

      <p></p>
    </React.Fragment>
  </div>
);
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
