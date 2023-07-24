import React from "react";

import { Grid, Row, Column } from "carbon-components-react";

const stylesheet = {

    divisor: {
        borderTop: '2px solid #000000',
        opacity: "1",
        width: "100%",
        margin: "0 0 1rem 0",
    },

    texts:{
        titlePerson:{
            font: 'normal normal normal 42px/67px IBM Plex Sans'
        },

        titlePersonJob:{
            font: 'italic normal 300 21px/28px IBM Plex Sans',
            marginTop: "1.4rem"
        },

        text:{
            font: 'normal normal normal 16px/21px Segoe UI',
            textAlign: "justify",
            marginTop: ".6rem"
        },
    },

    carrousel:{
        containerImage:{
            display: "block"
        },

        image:{
            height: '100%',
            width: "100%",
            display: "flex",
            objectFit: "cover",
        },

        topic:{
            display: "flex",
            flexDirection: "column",
            marginTop: ".7rem",

            span:{
                marginTop: ".5rem"
            },

            title:{
                font: "italic normal 600 14px/19px Segoe UI"
            }
        },

        date: {
            display: "flex",
            flexDirection: "column",
            marginTop: "1rem",

            info:{
                margin: ".5rem 0"
            }
        }
    }
}

const ElementCarrousel = ({dataCarrousel}) => {

    const {image, name, titleJob, text, topic} = dataCarrousel;
    const {namePalestra, date, hour} = dataCarrousel.datePalestra;

    return(
        <Grid>
            <Row condensed style={{justifyContent: "space-between"}}>
                <Column lg={6} style={stylesheet.carrousel.containerImage}>
                    <img src={image} style={stylesheet.carrousel.image} alt={name}/>
                </Column>

                <Column lg={9}>
                    <h1 style={stylesheet.texts.titlePerson}>{name}</h1>

                    <hr style={stylesheet.divisor} />
                    <h2 style={stylesheet.texts.titlePersonJob}>{titleJob}</h2>
                    <p style={stylesheet.texts.text}>{text}</p>

                    <div style={stylesheet.carrousel.topic}>
                        <span style={stylesheet.carrousel.topic.span}>{topic}</span>
                    </div>

                    <div style={stylesheet.carrousel.date}>
                        <div style={stylesheet.carrousel.date.info}>
                            <span style={stylesheet.carrousel.topic.span}>{`${date} - ${hour} - `}</span>
                            <span style={stylesheet.carrousel.topic.title}>{namePalestra}</span>
                        </div>
                    </div>
                </Column>
            </Row>  
        </Grid>
    )
}

export default ElementCarrousel;