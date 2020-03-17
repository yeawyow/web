import React, { Component } from 'react';
import Axios from 'axios';
import { Container } from 'react-bootstrap';

class DocP extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }


    componentWillMount(){
        
        let url="http://202.80.228.46:3000/api/DocPublishes/"+this.props.match.params.id
        console.log(url);
        Axios.get(url)
        .then(response => {
            this.setState({data:response.data})
        console.log(response.data);
        });
    }
    render(){
       
        return(
            <Container>
              <h2>55</h2>
              
            </Container>
               
              
           
        )
 
    }
}export default DocP;