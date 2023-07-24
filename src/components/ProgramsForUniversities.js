import React from "react";

import { Grid, Row, Column } from "carbon-components-react";

const stylesheet = {
    container:{
        width: "100%",
        minHeight: "auto",
        overflowX: "hidden",
        margin: '3rem 0',

        elements:{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "3rem",
        }
    },

    divisor: {
        borderTop: '2px solid #000000',
        opacity: "1",
        width: "167px",
        margin: "0 0 1rem 0",
    },

    texts:{
        titlePage:{
            font: 'normal normal 300 66px/106px IBM Plex Sans',
        },

        text:{
            font: 'normal normal 300 18px/29px IBM Plex Sans',
            textAlign: "justify",
            marginBottom: "3vh"
        },
    },

    containerImage:{
        display: "block"
    },

    image:{
        height: '100%',
        width: "100%",
        display: "flex",
        objectFit: "cover",
        boxShadow: '8px 8px 6px #00000029'
    },
}

const ProgramsForUniversities = () => {
    return(
        <div style={stylesheet.container} id="IBM and Academia">
            <Grid>
                <Row style={stylesheet.container.elements}>
                    <Column lg={16}>
                        <Row>
                            <Column>
                                <p style={stylesheet.texts.titlePage} tabIndex="0">IBM and Academia</p>
                            </Column>
                        </Row>
                        
                        <Row style={{marginTop: "20px"}}>
                            <Column lg={10}>
                                <p style={stylesheet.texts.text}>
                                The Global University Programs is the link between academia and IBM, providing access to technology, supporting research, and creating resources to promote skills relevant to today's workforce. </p>

                                <p style={stylesheet.texts.text}>
                                IBM Academic Initiative is the global university program that allows students and faculty at accredited academic institutions to access selected IBM resources through a free self-service program that will provide them with the skills needed to help them distinguish themselves in their career.
                                </p>
                            </Column>

                            <Column lg={6} style={stylesheet.containerImage}>
                                <img src="img/IBM na academia.png" style={stylesheet.image} alt="people in a room with computers, talking and studying"/>
                            </Column>
                        </Row>
                    </Column>
                </Row>
            </Grid>
        </div>
    )
}

export default ProgramsForUniversities;
