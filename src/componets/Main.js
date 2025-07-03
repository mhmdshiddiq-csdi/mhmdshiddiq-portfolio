import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { NavLink } from 'react-router-dom'
import { YinYang } from './AllSvg'


const MainContainer = styled.div`
  background: ${props => props.theme.body}; 
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,h3,h4,h5,h6 {
    font-family: 'Karla',sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
  padding: 2rem;
`
const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`
const Blog = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`
const Work = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg) ;
  text-decoration: none;
  z-index: 1;
`
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`
const About = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`
const Skills = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`
const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`


const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? "85%" : "50%"};
  left: ${props => props.click ? "92%" : "50%"};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  &>:first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  &>:last-child {
    display: ${props => props.click ? "none" : "inline-block"};
    padding-top: 1rem;
  }
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #000;


`

const Main = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }

  return (
    <MainContainer>
      <Container>
        <DarkDiv click={click}/>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />
        <Center click={click}>
          <YinYang onClick={() => handleClick()}  width={click ? 120: 200} height={click ? 120: 200} fill="currentColor" />
          <span>click here</span> 
        </Center>


        <Contact to='//mailto:mhmdshiddiq17@gmail.com'  target="_blank">
          <h2>Say hi...</h2>
        </Contact>
        <Blog to='/blog'  target="_blank">
          <h2>Blog</h2>
        </Blog>
        <Work to='/work'  target="_blank">
          <h2>Work</h2>
        </Work>
        <BottomBar>
          <About to="/about">
            <h2>About.</h2>
          </About>
          <Skills to="/skills">
            <h2>My Skills</h2>
          </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  )
}

export default Main
