import { keyframes } from 'styled-components'

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const fadeout = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const slidein = keyframes`
  0% {
    opacity: 0;
    right: 70px;
  }
  100% {
    opactiy: 1;
    right: 0px;
    color: white

  }
`
const slideout = keyframes`
  0% {
    opacity: 1;
    right: 0px;
  }
  100% {
    opacity: 0;
    right: 70px;

  }
`
export { slidein, slideout, fadein, fadeout }