import React from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import { fadein, fadeout } from './keyframes'

const Fade = styled.div`
    animation: ${props => props.visible ? fadein : fadeout} 1s ease-in-out;
    animation-fill-mode: forwards
`

const style = {
    cont: {
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        padding: '10px',
        opacity: '0',
        backgroundColor: "rgb(255,255,255,0.3)"
    },
    cont1: {
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        padding: '10px',
        opacity: '1',
        backgroundColor: "rgb(255,255,255,0.3)"
    },
    text: {
        color: 'white'
    }
}
function Bio ({image, visible}) {
    if (!image){
        return null;
    }

    return (
        
        <Fade style={style.cont} visible={visible}>
            <img src={image} width='400px'></img>
            <Typography style={style.text} variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
        </Fade>
        
    )
}

export default Bio