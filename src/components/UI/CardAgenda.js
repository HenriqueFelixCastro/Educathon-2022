import React from "react";

import { Row, Column } from "carbon-components-react";
import { Accordion, AccordionItem  } from "carbon-components-react";

const stylesheet = {
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

        date:{
            font: 'normal normal medium 24px/42px IBM Plex Sans',
            color: '#010101',
            fontWeight: '500'
        },

        infoAgenda: {
            font: 'normal normal normal 14px/42px IBM Plex Sans',
            color: '#010101',
            fontHeight: '1',
            letterSpacing: '0px',
        }
    },

    cardAgenda: {
        height: 'auto',
        margin: "2rem 0",
        background: '#F4F4F4',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        image:{
            width: "100%",
            display: "flex",
            objectFit: "contain",
        }
    },

    divisor:{
        width: '176px',
        height: '2px',
        background: '#1063FF',
        margin: "1rem 0"
    },

    smallDivisor: {
        width: '10px',
        height: '2px',
        background: 'black',
        margin: '1rem 0'
    }

}

const CardAgenda = ({dataCard}) => {

    const { title, date, agendaManha, agendaTarde, description, image } = dataCard;

    return(
        <Column lg={16}>
            <Row narrow style={stylesheet.cardAgenda}>
                <Column lg={6}>
                    <img src={image} style={stylesheet.cardAgenda.image} alt={title}/>

                    <div style={{padding: '1rem'}}>
                        <h2 style={stylesheet.texts.titlePublic}>{title}</h2>
                        <p style={stylesheet.texts.text}>{description}</p>
                    </div>
                </Column>

                <Column lg={9} style={{padding: '1rem', paddingBottom: '2rem'}}>
                    <h1 style={stylesheet.texts.date}>{date}</h1>
                    <hr style={stylesheet.divisor}/>

                    <Accordion align="start">
                        <AccordionItem title="English">
                            {agendaManha.map((agenda, index) => (
                                <p key={index} style={stylesheet.texts.infoAgenda}>{agenda}</p>
                            ))}
            
                            <hr style={stylesheet.smallDivisor} />
                            
                            {agendaTarde.map((agenda, index) => (
                                <p key={index} style={stylesheet.texts.infoAgenda}>{agenda}</p>
                            ))}
                        </AccordionItem>

                        <AccordionItem title="Spanish">  
                            {agendaManha.map((agenda, index) => (
                                <p key={index} style={stylesheet.texts.infoAgenda}>{agenda}</p>
                            ))}
                
                            <hr style={stylesheet.smallDivisor} />
                                
                            {agendaTarde.map((agenda, index) => (
                                <p key={index} style={stylesheet.texts.infoAgenda}>{agenda}</p>
                            ))}
                        </AccordionItem>

                        <AccordionItem title="Portuguese">
                            {agendaManha.map((agenda, index) => (
                                <p key={index} style={stylesheet.texts.infoAgenda}>{agenda}</p>
                            ))}
                
                            <hr style={stylesheet.smallDivisor} />
                                
                            {agendaTarde.map((agenda, index) => (
                                <p key={index} style={stylesheet.texts.infoAgenda}>{agenda}</p>
                            ))}
                        </AccordionItem>
                    </Accordion>
                </Column>
            </Row>
        </Column>
    )
}

export default CardAgenda;