import React from "react";

import { Grid, Row, Column } from "carbon-components-react";

const stylesheet = {
    container:{
        width: "100%",
        minHeight: "auto",
        overflowX: "hidden",

        elements:{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "3rem",
        }
    },

    texts: {
        text:{
            font: 'normal normal 300 28px/42px IBM Plex Sans',
            marginBottom: '2rem',
            textAlign: 'justify',

            styled:{
                color: '#1063FF'
            },

            italic:{
                font: 'italic normal 300 32px/42px IBM Plex Sans'
            }
        }
    },

    divison:{
        width: '176px',
        height: '1px',
        background: '#707070',
        margin: "2rem 0"
    } 
}

const AboutPage = () => {
    return(
        <div style={stylesheet.container} id="About Event">
            <Grid>
                <Row>
                    <Column lg={14} style={{ paddingBottom: '1rem', paddingTop: '4rem' }}>
                        <p style={stylesheet.texts.text}>Register for this <span style={stylesheet.texts.text.italic}>free</span> event designed for academia only! </p>
                        <p style={stylesheet.texts.text}>Register for this free event designed for academia only! Active students and faculty at accredited academic institutions are welcome to join us over 3 days from <span style={stylesheet.texts.text.styled}>April 26th – 28th </span>to learn about <span style={stylesheet.texts.text.styled}>trending technologies from IBM experts </span>including industry use cases and hands-on activities that are industry recognized tools used by our commercial clients.</p>
                    </Column>
                </Row>

                <hr style={stylesheet.divison} />
            </Grid>
        </div>
    )
}

export default AboutPage;
