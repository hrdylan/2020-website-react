import React from 'react'
import youtube from './images/youtube.png'
import instagram from './images/instagram.png'
const classes = {
    container: {
        width: '100vw',
        height: '8vh',
        display: 'flex',
        justifyContent: 'flex-end',
        color: 'white',
        backgroundColor: 'black'
    },
    img: {
        height: '100%'
    }

    
}
function Header() {
    return (
        <div style={classes.container}>
            <img src={youtube} style={classes.img}/>
            <img src={instagram} style={classes.img}/>
        </div>
    )
}

export default Header