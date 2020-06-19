import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Component/Home/Index";
import { Topbar } from "./Component/Topbar";
import { NavigationBar } from "./Component/NavigationBar";
import { ContactUs } from "./Component/Pages/ContactUs";
import { Directors } from "./Component/Pages/Directors";
import DocPup2 from "./Component/DocPup2.js";
import DocP from "./Component/DocP";
//import ValuesM from "./Component/Pages/ValuesM";
import BasicInformation from "./Component/Pages/BasicInformation";
import { PageNotFound } from "./Component/Pages/PageNotFound";
import styled from "styled-components";
import StructureHos from "./Component/Pages/StructureHos";
import History from "./Component/Pages/History";
import Vision from "./Component/Pages/Vision";
import Header from "./Component/Header";

//import  {Jumbotron}  from './Component/Jumbotron';

const Styles = styled.div`
  font-family: "Kanit", sans-serif;
`;

function App() {
  return (
    <React.Fragment>
      <Styles>
        {/*}  <Topbar />
        <NavigationBar />{*/}
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Directors" component={Directors} />
            <Route exact path="/ContactUs" component={ContactUs} />
            {/*}   <Route exact path="/ValuesM" component={ValuesM} />{*/}
            <Route exact path="/structurehos" component={StructureHos} />
            <Route exact path="/history" component={History} />
            <Route exact path="/vision" component={Vision} />
            <Route
              exact
              path="/Basicinformation"
              component={BasicInformation}
            />
            <Route exact path="/docpup2" component={DocPup2} />
            <Route exact path="/docp/:id" component={DocP} />
            <Route exact path="/404" component={PageNotFound} />
          </Switch>
        </Router>
      </Styles>
    </React.Fragment>
  );
}

export default App;
