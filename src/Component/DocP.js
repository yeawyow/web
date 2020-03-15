import React from 'react';
import { Container} from 'react-bootstrap';
import { Component } from 'react';
import Axios from 'axios';
import { DataTable } from 'primereact/datatable';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Column } from 'primereact/column';
import { withRouter } from 'react-router-dom';


class DocP extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    
    componentWillMount(){
        let url="http://202.80.228.46:3000/api/DocPublishes?access_token=HMpaz9KKH07Z7H32w7jcugUfbakecLxs6TsEUGGDs6bdqRsiHQIhD7FshZkRzPZ3";
        console.log(url);
        Axios.get(url)
        .then(response => {
            this.setState({data:response.data})
        console.log(response.data);
        })
    }

    detailLink=(a,b)=>{
        console.log(a);
        console.log(b);
    return (<div><a  onClick={()=>this.showDetail(a)} >{a.docPubTopic}</a></div>
        );
    }

    showDetail=(a)=>{
        console.log(a);
        this.props.history.push({
            pathname: '/test',
            state: { detail: a }
        });
    }

    render(){
        return (
           
           <Container>
              
             {this.state.response}
           </Container>
               

           
        )
    }
    
}
export default withRouter(DocP);