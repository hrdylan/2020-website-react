import React, { useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Parke from './images/parke-bio.png'
import Josh from './images/josh-bio.png'
import Nate from './images/nate-bio.png'
import Hannah from './images/hannah-bio.png'
import Johnny from './images/johnny-bio.png'
import Dylan from './images/dylan-bio.png'
import Bio from './Bio'
import Title from './Title'
import { Typography } from '@material-ui/core';
import SlideMenu from './SlideMenu'

const style = { 
    cont: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirect: 'row'
    },
    menu: {
        color: 'white',
        height: '100vh',
        width: '50vw',
        backgroundColor: 'black',
    },
    content: {
        display: 'flex',
        justify: 'center',
        alignItems: 'center'
    },
    names: {
        marginLeft: '3vw'
    }
}
function Bios(){
    const items = {'Parke': Parke, 'Josh': Josh, 'Nate': Nate, 'Hannah': Hannah, 'Dylan': Dylan, 'Johnny':Johnny}
    let [ hovered, setHovered ] = useState(null);
    console.log(hovered);
    
    return (
        <div style={style.cont}>
            <div style={style.menu}>
                <Title content='Bios' style={style.title}/>          
                <SlideMenu setHovered={setHovered} visible={true} item_labels={Object.keys(items)}/>
            </div>
            <div style={style.content}>
                <Bio image={items[hovered]} visible={hovered}></Bio>
            </div>
        </div>
    )
}

export default Bios

