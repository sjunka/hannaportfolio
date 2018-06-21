import React, { Component, Fragment } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";


import { Grid, Cell } from "react-mdl";

export class Resume extends Component {
    render() {
        return (
            <Fragment>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: "center" }}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{ height: "200px" }}
                            />
                        </div>
                        <h2 style={{ paddingTop: "2em" }}>Sergio Junca</h2>
                        <h4 style={{ color: "gray" }}>Web Developer</h4>
                        <hr
                            style={{
                                borderTop: "3px solid #833fb2",
                                width: "50%"
                            }}
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iste deserunt velit excepturi autem, eligendi
                            adipisci odio neque cumque quibusdam necessitatibus.
                        </p>
                        <hr
                            style={{
                                borderTop: "3px solid #833fb2",
                                width: "50%"
                            }}
                        />
                        <h5>Addres</h5>
                        <p>Santander, Colombia</p>
                        <h5>Phone</h5>
                        <p>315-569-5728</p>
                        <h5>Email</h5>
                        <p>sergio_junca@gmail.com</p>
                        <hr
                            style={{
                                borderTop: "3px solid #833fb2",
                                width: "50%"
                            }}
                        />
                    </Cell>

                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education
                            startYear={1999}
                            endYear={2004}
                            schoolName={"Quinta del puente"}
                            schoolDescription={
                                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sequi hic obcaecati?"
                            }
                        />

                         <Education
                            startYear={2007}
                            endYear={2014}
                            schoolName={"Universidad Autonoma de Bucaramanga"}
                            schoolDescription={
                                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sequi hic obcaecati?"
                            }
                        />

                        <hr style={{borderTop: "3px solid #e22947" }}/>

                              <h2>Experience</h2>
                              <Experience
                              startYear={2014}
                              endYear={2015}
                              jobName={"DataVox"}
                              jobDescription={
                                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sequi hic obcaecati?"
                              } 
                              />


                                    <Experience
                              startYear={2014}
                              endYear={2015}
                              jobName={"Guarumo"}
                              jobDescription={
                                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sequi hic obcaecati?"
                              } 
                              />

                        <hr style={{borderTop: "3px solid #e22947" }}/>


                              <h2>Skills</h2>
                                <Skills
                                skill={"English"}
                                  progress={100}
                                />       
                              

                               <Skills
                                skill={"JavaScript"}
                                  progress={100}
                                /> 

                                 <Skills
                                skill={"NodeJS"}
                                  progress={90}
                                /> 

                                 <Skills
                                skill={"React"}
                                  progress={100}
                                /> 

                                 <Skills
                                skill={"React-Native"}
                                  progress={25}
                                />
                    </Cell>
                </Grid>
            </Fragment>
        );
    }
}

export default Resume;
