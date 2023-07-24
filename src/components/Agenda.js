import React from "react";

import { Grid, Row, Column } from "carbon-components-react";

import CardAgenda from "./UI/CardAgenda";
import { dataAgenda } from "../db/data";

const stylesheet = {
    container:{
        width: '100%',
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
            font: 'normal normal 300 16px/20px IBM Plex Sans',
            textAlign: "justify"
        },
    }
}

const Agenda = () => {

    const { agendaProfessors, agendaStudents, agendaProfessorsAndStudents } = dataAgenda;

    return(
        <div style={stylesheet.container} id="Agenda">
            <Grid>
                <Row>
                    <Column lg={16} style={{ paddingBottom: '1rem', paddingTop: '1rem' }}>
                        <h1 style={stylesheet.texts.title} tabIndex="0">Our agenda </h1> 
                    </Column>

                    <CardAgenda dataCard={agendaProfessors} />
                    <CardAgenda dataCard={agendaStudents} />
                    <CardAgenda dataCard={agendaProfessorsAndStudents} />
                </Row>
            </Grid>
        </div>
    )
}

export default Agenda;
