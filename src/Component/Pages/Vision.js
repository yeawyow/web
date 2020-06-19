import React from "react";
import { Container } from "react-bootstrap";
import ValuesM from "../Pages/ValuesM";

export default function vision() {
  return (
    <div>
      <Container>
        <div className="mt-5">
          <h2>วิสัยทัศน์ (Vision)</h2>
          <p>
            <ul>
              <li>
                เป็นโรงพยาบาลที่มีคุณภาพ ร่วมสร้างเสริมสุขภาพ ประทับใจบริการ
              </li>
            </ul>
          </p>
          <h2>พันธกิจ (Mission)</h2>
          <p>
            <ul>
              <li>1. พัฒนาระบบบริการทั้งเชิงรุก เชิงรับให้ได้มาตรฐาน</li>
              <li>
                2. พัฒนาโรงพยาบาลสู่การเป็นโรงพยาบาลส่งเสริมสุขภาพ
                โดยเน้นการมีส่วนร่วมของภาคีเครือข่าย
              </li>
              <li>
                3. พัฒนาทักษะของบุคลากรตามมาตรฐานวิชาชีพและการบริการที่เป็นเลิศ
              </li>
            </ul>
          </p>
        </div>
        <ValuesM />
      </Container>
    </div>
  );
}
