import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes'
import {Design, Developer} from './AllSvg'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  font-family: 'Ubuntu Mono',monospace;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
`
const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  strong {
    margin-bottom: 1rem;
    text-decoration: uppercase;

  }
  ul, p {
    margin-left: 2rem;

  }
`
const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and simple.
          </Description>
          <Description>
            <strong>
              I Like to Design
              </strong>
              <ul>
                <li>
                  Web Design
                </li>
                <li>
                  Mobile Apps
                </li>
              </ul>
          </Description>
          <Description>
            <strong>
              Tools 
              </strong>
              <ul>
                <li>
                  Figma
                </li>
              </ul>
          </Description>
        </Main>
        <Main>
        <Title>
            <Developer width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
          I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
          </Description>
          <Description>
            <strong>
              Skills
              </strong>
              <p>HTML, CSS, JS, REACT, REDUX, SASS, BOOTSTRAP, TAILWIND</p>
          </Description>
          <Description>
            <strong>
              Tools 
              </strong>
              <p>VSCode, Github, Codepen, etc.</p>
          </Description>
        </Main>
      </Box>
      
    </ThemeProvider>
  )
}

export default MySkillsPage
