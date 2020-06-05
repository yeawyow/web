import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { faDownload, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Styles = styled.div`
  table td {
    text-align: left;
    color: #545d68;
  }
  .tablestyle {
    background-color: #065279;
    color: white;
    text-align: center;
  }
  a {
    color: #1b2631;
  }
  a:link {
    text-decoration: none;
  }
  a:hover {
    color: #5d6d7e;
  }
`;
class DocPup2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch(
      "http://202.80.228.46:8080/api/DocPublishes/?access_token=HMpaz9KKH07Z7H32w7jcugUfbakecLxs6TsEUGGDs6bdqRsiHQIhD7FshZkRzPZ3"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { items } = this.state;
    console.log(items);
    return (
      <div className="container">
        <span className="h2">เอกสารเผยแพร่</span>
        <p></p>
        <Styles>
          <Table>
            <thead className="tablestyle">
              <tr>
                <th>ไฟล์</th>
                <th>หัวข้อเอกสาร</th>
                <th>วันที่ประกาศ</th>
                <th>ดาวน์โหลด</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <FontAwesomeIcon className="fa-lg" icon={faFilePdf} />
                  </td>
                  <td>
                    <a
                      href={`http://akathospital.com/file/${item.docPubFile}`}
                      target="_bank"
                    >
                      {item.docPubTopic}
                    </a>
                  </td>
                  <td>{item.docPubDate}</td>
                  <td>
                    <FontAwesomeIcon className="fa-lg" icon={faDownload} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Styles>
      </div>
    );
  }
}

export default withRouter(DocPup2);
