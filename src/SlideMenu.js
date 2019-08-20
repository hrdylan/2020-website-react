import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Typography } from '@material-ui/core';
import { slidein, slideout } from './keyframes'
export const SlideLi = styled.li`
    color: ${props => props.in ? 'black' : 'white'}
    position: relative
    margin: 5px
    padding: 0
    cursor: pointer
    width: fit-content
    animation: ${props => props.in ? slidein : slideout} 2s ease-in-out ${props => props.delay};
    animation-fill-mode: forwards

    :hover {
        background: grey
    }
  
`

const style = {
  list: {
    listStyleType: 'none'
  },
  trigger: {
    width: 'fit-content'
  }
}

function SlideMenu ({ visible, item_labels, setHovered }) {
    if (!setHovered) {
      setHovered = () => {};
    }
    const items = item_labels.map((item, index) => {
      return (
        <div style={style.trigger} onMouseEnter={() => {setHovered(item)}} onMouseLeave={() => {setHovered(null)}}>
          <SlideLi in={visible} delay={String(0.2 * index) + 's'}>
            <Typography variant='h5'>{item}</Typography>
          </SlideLi>
        </div>
     )
    });
    return (
        <ul style={style.list}>
          {items}
        </ul>
    )
}

export default SlideMenu