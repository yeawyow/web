import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
const Styles = styled.div`
  background: darkgreen;
  padding: 10px;
  color: GhostWhite;
`;

export const Topbar = () => (
  <Styles>
    <div>
      <Container>
        <Row>
          <Col xl={6} md={6}>
            <Row>
              <Col>
                <FontAwesomeIcon className="fa-2x" />
                จะรวย จะจน ทุกชน ทุกศาสน์ โรงพยาบาลอากาศยินดีต้อนรับ
              </Col>
            </Row>
          </Col>
          <Col xl={6} md={6} xs={12}>
            <Row>
              <Col xs={6}>
                <FontAwesomeIcon className="fa-2x" icon={faPhoneSquare} />{" "}
                042-799000,042-799181{" "}
              </Col>
              <Col xs={6}>
                <FontAwesomeIcon className="fa-2x" icon={faFacebookSquare} />{" "}
                akathospital{" "}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  </Styles>
);
