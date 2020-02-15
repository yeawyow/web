import React from 'react';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import { Home } from './Component/Home/Index';
import {  Topbar } from './Component/Topbar';
import { NavigationBar } from './Component/NavigationBar';
import { AboutUs } from './Component/Pages/AboutUs';
import {NoMatch} from './Component/NoMatch';


function App() {
  return (
   <React.Fragment>
      <Topbar/>
     <NavigationBar/>
      
       <Router>
      <Switch>
        <Route exact path= "/" component = {Home} />
        <Route exact path= "/About" component = { AboutUs } />
        <Router component = {NoMatch} />
      </Switch>
    </Router>
    
    
   </React.Fragment>
  );
}

export default App;
