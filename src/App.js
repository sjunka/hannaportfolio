import React, { Component } from "react";
import { Link } from "react-router-dom";

import Main from "./components/main";

import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header title="Menu" scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Menu">
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
