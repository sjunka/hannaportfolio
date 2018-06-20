import React, { Component, Fragment } from "react";
import {
    Tabs,
    Tab,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardActions,
    CardMenu,
    CardText,
    Button,
    IconButton
} from "react-mdl";

export class Projects extends Component {
    state = {
        activeTab: 0
    };

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return (
              <div className="projects-grid">
                {/* Project #  */}
                <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "#fff",
                            height: "176px",
                            background:
                                "url(https://cdn.auth0.com/blog/reactjs16/logo.png) center / cover"
                        }}
                    >
                        React project
                    </CardTitle>

                    <CardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus itaque ad maiores. Nemo aliquam quas ad ipsa porro
                        nisi exercitationem?
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>

                        <Button colored>Codepen</Button>

                        <Button colored>Demo</Button>
                    </CardActions>

                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* Project #  */}
                <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "#fff",
                            height: "176px",
                            background:
                                "url(https://cdn.auth0.com/blog/reactjs16/logo.png) center / cover"
                        }}
                    >
                        React project
                    </CardTitle>

                    <CardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus itaque ad maiores. Nemo aliquam quas ad ipsa porro
                        nisi exercitationem?
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>

                        <Button colored>Codepen</Button>

                        <Button colored>Demo</Button>
                    </CardActions>

                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* Project #  */}
                <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "#fff",
                            height: "176px",
                            background:
                                "url(https://cdn.auth0.com/blog/reactjs16/logo.png) center / cover"
                        }}
                    >
                        React project
                    </CardTitle>

                    <CardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus itaque ad maiores. Nemo aliquam quas ad ipsa porro
                        nisi exercitationem?
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>

                        <Button colored>Codepen</Button>

                        <Button colored>Demo</Button>
                    </CardActions>

                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
              </div>

                // Project 2

                
            );
        } else if (this.state.activeTab === 1) {
            return <h1>this is Angular </h1>;
        } else if (this.state.activeTab === 2) {
            return <h1>this is vue</h1>;
        } else if (this.state.activeTab === 3) {
            return <h1> this is mongo db</h1>;
        }
    };

    render() {
        return (
            <Fragment>
                <div className="catergory-tabs">
                    <Tabs
                        activeTab={this.state.activeTab}
                        onChange={tabId => this.setState({ activeTab: tabId })}
                        ripple
                    >
                        <Tab>React</Tab>

                        <Tab>Angular</Tab>

                        <Tab>Vue</Tab>

                        <Tab>Mongo DB</Tab>
                    </Tabs>

                        <Grid >
                            <Cell col={12}>
                                <div className="content">
                                    {this.toggleCategories()}
                                </div>
                            </Cell>
                        </Grid>
                </div>
            </Fragment>
        );
    }
}

export default Projects;
