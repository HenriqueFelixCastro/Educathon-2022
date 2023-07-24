import React, { useState } from "react";

import { Grid, Row, Column } from "carbon-components-react";
import { ChevronLeft32, ChevronRight32 } from '@carbon/icons-react';
import { Button } from "carbon-components-react";

import ElementCarrousel from "./UI/ElementCarrousel";
import { dataSpeakers } from "../db/data"

const stylesheet = {
    container:{
        minHeight: "auto",
        overflowX: "hidden",
        padding: "1rem 0",
        marginTop: '3rem',

        elements:{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "3rem",
        }
    },

    divisor: {
        borderTop: '2px solid #000000',
        opacity: "1",
        width: "100%",
        margin: "0 0 1rem 0",
    },

    texts:{
        title: {
            font: 'normal normal medium 13px/17px IBM Plex Sans',
        },

        titlePage:{
            font: 'normal normal 300 66px/106px IBM Plex Sans',
            
        },

        styledTexts:{
            display: 'flex'
        },

        styledText:{
            font: 'italic normal 300 66px/106px IBM Plex Sans',
            color: '#0335FF',
            marginLeft: "1rem"
        },

        text:{
            font: 'normal normal normal 16px/21px Segoe UI',
            textAlign: "justify",
            marginTop: ".6rem"
        },
    },

    containerCarrousel:{
        height: "auto",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "1rem",
        position: "relative",
    },

    containerListDots: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5rem"
    },

    coloredIcon:{
        margin: "0 1rem",
        borderRadius: "50%",
        height: "8px",
        width: "8px",
        background: "#1247C6"
    },

    nonColoredIcon:{
        margin: "0 1rem",
        borderRadius: "50%",
        height: "8px",
        width: "8px",
        background: "#888D95"
    },

}

const RenderListDots = ({dataCarrousel}) => {
    return(
        <Row style={stylesheet.containerListDots}>
            {dataSpeakers.map(element => (
                element.id === dataCarrousel.id ? <div style={stylesheet.coloredIcon} /> : <div style={stylesheet.nonColoredIcon} />
            ))}
        </Row>
    )
}

const Experts = () => {
    const [dataSelected, setDataSelected] = useState(dataSpeakers[0]);
    const maxElements = dataSpeakers.length - 1;

    const onBackExpert = () => {
        if(dataSelected.id === 0){
            let nextData = dataSpeakers.find(element => element.id === dataSelected.id + maxElements);
            setDataSelected(nextData);
        }else{
            let nextData = dataSpeakers.find(element => element.id === dataSelected.id - 1);
            setDataSelected(nextData);
        }
    }

    const onNextExpert = () => {
        if(dataSelected.id === maxElements){
            let nextData = dataSpeakers.find(element => element.id === dataSelected.id - maxElements);
            setDataSelected(nextData);
        }else{
            let nextData = dataSpeakers.find(element => element.id === dataSelected.id + 1);
            setDataSelected(nextData);
        }
    }

    return(
        <div style={stylesheet.container} id="Speakers">
            <Grid>
                <Row style={stylesheet.container.elements}>
                    <Column lg={16}>
                        <Row>
                            <Column>
                                <div style={stylesheet.texts.styledTexts}>
                                    <p style={stylesheet.texts.titlePage} tabIndex="0">Meet the Speakers</p>
                                </div>
                            </Column>
                        </Row>
                    </Column>
                   
                    <Column lg={16}>
                        <Row condensed style={stylesheet.containerCarrousel} className="container-carrousel">
                            <Column md={1} lg={1} style={{display: "flex", justifyContent: "flex-start"}} className="container-button-carrousel left">
                                <Button kind="ghost" aria-label="icon left" onClick={onBackExpert} style={{display: "flex"}}>
                                    <ChevronLeft32 />
                                </Button>
                            </Column>

                            <Column sm={4} md={5} lg={13}>
                                {/* Carrousel */}
                                <ElementCarrousel dataCarrousel={dataSelected} />
                                {/* dots  */}
                                <RenderListDots dataCarrousel={dataSelected}/>
                            </Column>

                            <Column md={1} lg={1} style={{display: "flex", justifyContent: "flex-end"}} className="container-button-carrousel right">
                                <Button kind="ghost" aria-label="icon right" onClick={onNextExpert} style={{display: "flex"}}>
                                    <ChevronRight32 />
                                </Button>
                            </Column>
                        </Row>
                    </Column>
                </Row>
            </Grid>
        </div>
    )
}

export default Experts;