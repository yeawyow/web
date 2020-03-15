import React from 'react';
import { Container} from 'react-bootstrap';
import { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { withRouter } from 'react-router-dom';


class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            thisRow:this.props.location.state
        }
    }
    componentWillMount(){
        console.log(this.state.thisRow.detail.id);
    }

    detailLink=(a,b)=>{
        return (<div><div onClick={this.showDetail} >Perform action</div></div>
        );
    }

    showDetail=(a)=>{
        this.props.history.push('/');
    }

    render(){
        return (
           
           <Container>
              
              
                   <span className="h2">Detail เอกสารเผยแพร่</span>
           </Container>
               

           
        )
    }
    
}
export default withRouter(Test);