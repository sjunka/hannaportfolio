import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export class Contact extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://imgur.com/luZZPJC.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />

                            <p>
                                HTML/CSS | Bootstrap | JavaScript | React |
                                React Native | NodeJS | Express | MongoDB
                            </p>

                            <div className="social-links">

                                <a href="http://google.com" target="_blank" rel="noopener noreferrer ">
                                    <i className="fab fa-linkedin"  aria-hidden="true"/>
                                </a>

                                <a href="http://github.com" target="_blank" rel="noopener noreferrer ">
                                    <i className="fab fa-github"  aria-hidden="true"/>
                                </a>

                                <a href="http://google.com" target="_blank" rel="noopener noreferrer ">
                                    <i className="fab fa-free-code-camp"  aria-hidden="true"/>
                                </a>

                                <a href="http://google.com" target="_blank" rel="noopener noreferrer ">
                                    <i className="fab fa-youtube"  aria-hidden="true"/>
                                </a>



                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
