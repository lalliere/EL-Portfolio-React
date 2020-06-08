import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AboutMe from "./AboutMe";
import Project from "./Project";

const Routes = () => (
    <BrowserRouter>
        <Switch>     
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/project" component={Project} />
            {/* <Route exact path="/" component={Projects} /> */}
        </Switch>
    </BrowserRouter>
)
export default Routes;