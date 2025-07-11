import React, { useState} from 'react'
import styled from 'styled-components'
import Music from '../assets/audio/u-said-it-v13-1167.mp3'
import { keyframes } from 'styled-components'

const Box = styled.div`
  display: flex;
  cursore: pointer;
  position: fixed;
  left: 16rem;
  top: 3rem;
  z-index: 10;

  &>*:nth-child(1) {
    animation-delay: 0.2s;
  }
  &>*:nth-child(2) {
    animation-delay: 0.3s;
  }
  &>*:nth-child(3) {
    animation-delay: 0.4s;
  }
  &>*:nth-child(4) {
  animation-delay: 0.5s;
  }
  &>*:nth-child(5) {
  animation-delay: 0.6s; 
  }
`
const play = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(2); }
  100% { transform: scale(1); }
`
const Line = styled.span`
  background-color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.body};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${props => props.click ? "running" : "paused"};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`

const SoundBar = () => {
  const ref = React.useRef(null)
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
    if(!click){
      ref.current.play()
    }else{
      ref.current.pause()
    }
  }
  return (
    <Box onClick={() => handleClick()}>
      <Line click={click}/>
      <Line click={click}/>
      <Line click={click}/>
      <Line click={click}/>
      <Line click={click}/>
      <audio src={Music} ref={ref} loop/>
    </Box>
  )
}



export default SoundBar
