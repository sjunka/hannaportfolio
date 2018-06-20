import React, { Component } from "react";

import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

export class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Sergio Junca</h2>

                        <img
                            src="https://cdn3.iconfinder.com/data/icons/web-and-seo-11-1/65/549-512.png"
                            alt="avatar_image"
                            style={{ height: "200px" }}
                        />

                        <p
                            style={{
                                width: "75%",
                                margin: "auto",
                                paddingTop: "1em"
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsum reprehenderit sunt autem amet, eligendi
                            quaerat laborum sed nisi facere repellat ratione
                            necessitatibus, inventore quo odio tempora commodi
                            exercitationem, possimus nesciunt.
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact me</h2>

                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent
                                        style={{
                                            fontSize: "30px",
                                            fontFamily: "Anton"
                                        }}
                                    >
                                        <i
                                            className="fas fa-mobile-alt"
                                            aria-hidden="true"
                                        />
                                        (57)-315 569 5728
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent
                                        style={{
                                            fontSize: "30px",
                                            fontFamily: "Anton"
                                        }}
                                    >
                                        <i
                                            className="fas fa-envelope"
                                            aria-hidden="true"
                                        />
                                        sergio.junca@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent
                                        style={{
                                            fontSize: "30px",
                                            fontFamily: "Anton"
                                        }}
                                    >
                                        <i

                                            className="fab fa-skype"
                                            aria-hidden="true"
                                        />
                                        junkapro
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
