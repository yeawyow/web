import React from 'react';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import { Home } from './Component/Home/Index';
import {  Topbar } from './Component/Topbar';
import { NavigationBar } from './Component/NavigationBar';
import { AboutUs } from './Component/Pages/AboutUs';
import {NoMatch} from './Component/NoMatch';
import styled from 'styled-components';
import  {Jumbo}  from './Component/Jumbotron';

const Styles = styled.div`
font-family: 'Kanit', sans-serif;
`;

function App() {
  return (
   <React.Fragment>
       <Styles>
         <Topbar/>
     <NavigationBar/>
      <Jumbo/>
       <Router>
      <Switch>
        <Route exact path= "/" component = {Home} />
        <Route exact path= "/About" component = { AboutUs } />
        <Router component = {NoMatch} />
      </Switch>
    </Router>
       </Styles>
      
    
    
   </React.Fragment>
  );
}

export default App;
