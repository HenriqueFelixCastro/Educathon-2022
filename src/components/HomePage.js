import React from "react";

import { Grid, Row, Column, Button} from "carbon-components-react";
import {ArrowRight16} from '@carbon/icons-react';

const stylesheet = {

    container:{
        backgroundColor: "black",
        minHeight: "92vh",
        height: 'auto',
        background: `url("${process.env.PUBLIC_URL}/img/jumbo-background.png") no-repeat center center`,
        backgroundSize: 'cover'
    },

    texts: {
        title:{
            font: 'normal normal 300 45px/58px IBM Plex Mono',
            color: '#FFFFFF',
            opacity: '1',
            marginBottom: '1rem'
        },

        subtitle:{
            font: 'normal normal 300 80px/120px IBM Plex Sans',
            color: '#FFFFFF',
        },

        styled:{
            font: 'italic normal 300 80px/120px IBM Plex Sans',
            color: "#0F62FE",
            lineHeight: '0.8'
        },

        text:{
            font: 'normal normal 300 18px/42px IBM Plex Sans, Thin',
            color: '#FFFFFF',
            margin: '1rem 0',
            lineHeight: '1.5'
        }
    },

    button:{
        width: '300px',
        color: "#fffff",

        link: {
            textDecoration: 'none',
            color: "#FFFFF",
        }
    },
}

const HomePage = () => {
    return(
        <div style={stylesheet.container} id="Home Page">
            <Grid>
                <Row style={{padding: "40px 0px", minHeight: '93vh', height: 'auto'}}>
                    <Column sm={3} md={7} lg={16} style={{margin: '1rem 0'}}>
                        <h1 style={stylesheet.texts.title}>Educathon Americas 2022</h1>
                        <p style={stylesheet.texts.subtitle}>Learning through </p>
                        <p style={stylesheet.texts.styled}>discovery.</p>
                    </Column>

                    <Column sm={3} md={6} lg={8} style={{display: 'flex', alignSelf: 'flex-end', flexDirection: 'column', margin: '1rem 0'}}>
                        <p style={stylesheet.texts.text}>The event that brings together faculty and students from all over the continent as we expand this year to include North America.</p>

                        <Button style={stylesheet.button} renderIcon={ArrowRight16} href="https://www.eventbrite.com/e/educathon-americas-2022-tickets-310515118077" title="Register">
                            Register
                        </Button>
                    </Column>
                </Row>
            </Grid>
        </div>
    )
}

export default HomePage;