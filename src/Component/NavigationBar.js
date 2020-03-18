import React from "react";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import styled from "styled-components";
import logohos from "./Images/logohos.png";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
  .navbar {
    margin: 10px;
  }
  .nav-link {
    margin: 20px;
  }
  .thumbnail {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" bg="" variant="light">
      <Navbar.Brand href="/">
        <Image className="thumbnail" src={logohos} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/">
            {" "}
            <FontAwesomeIcon className="fa-lg" icon={faHome} />
          </Nav.Link>
          <Nav.Link href="/DocPup2">เอกสารเผยแพร่</Nav.Link>
          <NavDropdown title="ข้อมูลหน่วยงาน" id="collasible-nav-dropdown">
            <NavDropdown.Item href="About">ประวัติความเป็นมา</NavDropdown.Item>
            <NavDropdown.Item href="/directors">
              คณะกรรมการบริหาร
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              กรอบโครงสร้างหน่วยงาน
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              ข้อมูลหน่วยงาน
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#pricing">ผลงานและนวตกรรม</Nav.Link>
          <Nav.Link href="#pricing">ติดต่อเรา</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
