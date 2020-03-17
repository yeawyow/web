import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Link,withRouter} from 'react-router-dom';
import { faDownload,faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';


const Styles = styled.div`
  table td {
    text-align: center;
    color:#545D68;
  }
  .tablestyle{
   background-color:#065279;
   color:white;
   text-align: center;
 }
`;
class DocPup2 extends Component {


constructor(props) {
    super(props);
    this.state={
        items:[],
        isLoaded:false,
    }
}
componentDidMount(){
    fetch('http://202.80.228.46:3000/api/DocPublishes/?access_token=HMpaz9KKH07Z7H32w7jcugUfbakecLxs6TsEUGGDs6bdqRsiHQIhD7FshZkRzPZ3')
    .then(res=>res.json())
    .then(json=>{
        this.setState({
         isLoaded:true,
         items:json,
        })
    });
}

render(){
    var {items}=this.state;
 
        return(
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
            {items.map(item=>(
             
            <tr >
              <td Style="color: Dodgerblue;"><FontAwesomeIcon className="fa-lg" icon={faFilePdf}  /></td>
              <td ><Link to={`/docp/${item.id}`}>{item.docPubTopic}</Link></td>
              <td>{item.docPubDate}</td>
              <td><FontAwesomeIcon className="fa-lg" icon={faDownload}  /></td>
            </tr> 
            ))}
        </tbody>
    </Table>
    </Styles>
    
        
</div>
        )
    }
  
   
}

export default withRouter(DocPup2) 
