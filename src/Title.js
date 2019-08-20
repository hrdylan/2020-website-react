import React from 'react'
import Typography from '@material-ui/core/Typography'
import Fade from 'react-reveal/Fade'
import Letter from './Letter'

const style = {
    container: {
        display: 'inline-block'
    },
    title: {
        fontSize: '20vw'
    }
}
function Title(props) {
    const arr = props.content.split("")

    const letters = arr.map((char, index) => {
         return (
            <Letter char={char} index={index}/>
        )
    });
    return (
        <div>
            {letters}
        </div>
    )
};

export default Title


