import React from 'react';

import { Grid, Row, Column } from "carbon-components-react";
import { CTA } from "@carbon/ibmdotcom-react";

import CardButton from "./UI/CardButton";
import { dataTechnologies } from "../db/data"

const stylesheet = {
    container:{
        minHeight: "auto",
        overflowX: "hidden",
        padding: "1rem 0",
        marginTop: '3rem'
    },

    texts:{
        title: {
            font: 'normal normal 300 65px/85px IBM Plex Sans'
        },

        titlePublic:{
            font: 'normal normal normal 42px/55px IBM Plex Sans',
            padding: '1rem 0'
        },

        text: {
            font: 'normal normal 300 20px/20px IBM Plex Sans',
            textAlign: "justify"
        },

        titleTech: {
            font: 'normal medium 300 28px/20px IBM Plex Sans',
            marginTop: '50px'
        }
    },

    containerCardButtons: {
        display: "grid",
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1rem'
    }
}

const AcademicIniative = () => {
    return(
        <div style={stylesheet.container} id="Academic Iniative">
            <Grid>
                <Row>
                    <Column lg={16} style={{ paddingBottom: '1rem', paddingTop: '1rem' }}>
                        <h1 style={stylesheet.texts.title} tabIndex="0">IBM Academic Initiative </h1> 
                    </Column>

                    <Column lg={12}>
                        <p style={stylesheet.texts.text}>Is a program that enables students and faculty at accredited academic institutions to access select IBM resources through a no-charge, self-service program that will provide them with the requisite skills to help distinguish themselves in their career.</p>

                    </Column>

                    <Column lg={12} style={{margin: '2rem 0'}}>
                        <CTA
                            style="text"
                            type="local"
                            copy="Go to IBM Academic Initiative"
                            href="https://www.ibm.com/academic/home"
                        />
                    </Column>
                </Row>

                <Column>
                    <Row style={stylesheet.containerCardButtons} className="container-card-buttons">
                        {dataTechnologies.map(tech => (
                            <CardButton key={tech.id} dataButton={tech}/>
                        ))}
                    </Row>
                </Column>
            </Grid>
        </div>
    )
}

export default AcademicIniative;
