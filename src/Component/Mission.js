import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  ul {
    list-style-type: none;
  }
`;
export const Mission = () => (
  <div>
    <Styles>
      <div>
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
      <hr></hr>
    </Styles>
  </div>
);
