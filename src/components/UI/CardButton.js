import React from 'react';

const CardButton = ({dataButton}) => {

    const stylesheet = {
        cardButton:{
            width: '100%',
            height: '200px',
            background: `${dataButton.color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            textDecoration: 'none',
            color: `${dataButton.textColor}`,

            internal:{
                display: 'flex',
                width: '80%',
                minHeight: '60px',
                flexDirection: 'column',
            }
        },

        texts: {
            titleTech: {
                font: 'normal medium 300 28px/20px IBM Plex Sans',
                marginTop: '30px',
                fontWeight: '700'
            }
        },

        image:{
            diplay: 'block',
            width: '50px',
            height: '50px',
        }
    }

    const {title, link, image} = dataButton;

    return(
        <a style={stylesheet.cardButton} href={link}>
            <div style={stylesheet.cardButton.internal}>
                <img src={image} alt={`icon ${title}`} style={stylesheet.image} />
                <p style={stylesheet.texts.titleTech}>{title}</p>
            </div>
        </a>
    )
}

export default CardButton;