import React, { useState } from 'react'
import { height } from '@material-ui/system';
import Typography from '@material-ui/core/Typography'
import styled, { keyframes } from 'styled-components';
import Title from './Title';
import Fade from 'react-reveal/Fade';
import SlideMenu from './SlideMenu'
const style = {
    width: '100vw',
    height: '92vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'Black',
    target: {
        display: 'flex'
    },
    bars: {
        width: '10%',
        height:'10%'
    },
    list: {
        listStyleType: 'none'
    }
    
}
function MainView () {
    const [hover, setHover] = useState(true);
    console.log(hover);
    const items = ['Bios', 'Shows', 'Photos', 'Videos', 'Contact']
    return (
        <div style={style}>
            {/* <canvas delay={2000} data-processing-sources={'bars.pde'}></canvas> */}
            <div onMouseEnter={()=> {setHover(true)}} onMouseLeave={() => { setHover(false)}} style={style.target} >
                <Title content='20/20'/>
                <SlideMenu visible={hover} item_labels={items}/>
            </div>


        </div>
    )
}

export default MainView