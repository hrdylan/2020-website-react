import React, { useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Fade from 'react-reveal/Fade'

const style ={
    container: {
        display: 'inline-block',
        padding: '0'
        
    },
    char: {
        fontSize: '20vw'
    }
}

function Letter(props){
    const [ hover, setHover ] = useState(false);
    function flip(){
        setHover(!hover);
    }
    return (
        <div style={style.container} onMouseEnter={flip} onMouseLeave={flip}>
            <Fade top duration={2000} timeout={props.index * 1000 + 1000}>
                <Typography variant='h1' display='inline' style={style.char}>
                    {props.char}     
                 </Typography>
        
            </Fade>
        </div>
    )
}

export default Letter