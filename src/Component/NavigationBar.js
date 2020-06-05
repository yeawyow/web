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
          <NavDropdown title="เกี่ยวกับเรา" id="collasible-nav-dropdown">
            <NavDropdown.Item href="Basic information">
              ข้อมูลพื้นฐาน
            </NavDropdown.Item>
            <NavDropdown.Item href="About">ประวัติโรงพยาบาล</NavDropdown.Item>
            <NavDropdown.Item href="/directors">
              คณะกรรมการบริหาร
            </NavDropdown.Item>
            <NavDropdown.Item href="ValuesM">ค่านิยม (Values)</NavDropdown.Item>

            <NavDropdown.Item href="/structurehos">
              กรอบโครงสร้างหน่วยงาน
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <NavDropdown title="เอกสารเผยแพร่" id="collasible-nav-dropdown">
            <NavDropdown.Item href="Basic information">
              แผนยุทธศาสตร์ชาติ 20 ปี
            </NavDropdown.Item>
            <NavDropdown.Item href="ValuesM">
              แผนปฏิบัติงานของหน่วยงาน
            </NavDropdown.Item>
            <NavDropdown.Item href="/docpup2">
              แผนจัดซื้อจัดจ้าง
            </NavDropdown.Item>
            <NavDropdown.Item href="/directors">
              ช่องทางการร้องเรียน
            </NavDropdown.Item>
            <NavDropdown.Item href="/structurehos">
              คู่มือการปฏิบัติงาน
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          {/*}  <Nav.Link href="/DocPup2">เอกสารเผยแพร่</Nav.Link>{*/}

          <Nav.Link href="#pricing">ผลงานและนวตกรรม</Nav.Link>
          <Nav.Link href="ContactUs">ติดต่อเรา</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
