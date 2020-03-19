import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Component/Home/Index";
import { Topbar } from "./Component/Topbar";
import { NavigationBar } from "./Component/NavigationBar";
import { AboutUs } from "./Component/Pages/AboutUs";
import { Directors } from "./Component/Pages/Directors";
import { NoMatch } from "./Component/NoMatch";
import DocPup2 from "./Component/DocPup2.js";
import DocP from "./Component/DocP";
import { PageNotFound } from "./Component/Pages/PageNotFound";
import styled from "styled-components";

//import  {Jumbotron}  from './Component/Jumbotron';

const Styles = styled.div`
  font-family: "Kanit", sans-serif;
`;

function App() {
  return (
    <React.Fragment>
      <Styles>
        <Topbar />
        <NavigationBar />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Directors" component={Directors} />
            <Route exact path="/About" component={AboutUs} />
            <Route exact path="/docpup2" component={DocPup2} />
            <Route exact path="/docp/:id" component={DocP} />
            <Route exact path="/404" component={PageNotFound} />

            <Router component={NoMatch} />
          </Switch>
        </Router>
      </Styles>
    </React.Fragment>
  );
}

export default App;
