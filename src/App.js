import React, { Component } from "react";
import { Link } from "react-router-dom";
import './App.css';

import Main from "./components/main";

import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header title={<Link style={{textDecoration: "none", color:"white"}} to="/"> Home </Link>} className={"header-color"} scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link style={{textDecoration: "none", color:"black"}} to="/"> Home </Link>}>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
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
