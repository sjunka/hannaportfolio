import React from "react";
import { Switch, Route } from "react-router";

import AboutMe from "./Aboutme";
import Contact from "./Contact";
import Landing from "./LandingPage";
import Projects from "./Projects";
import Resume from "./Resume";

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />

        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
);

export default Main;
