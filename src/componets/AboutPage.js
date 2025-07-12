import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import astronaut from '../assets/Images/spaceman.png'
import { keyframes } from 'styled-components'
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`
const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`
const SpaceMan = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`
const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 55vh;
  z-index: 3;
  line-height: 1.5;
  font-family: 'Ubuntu Mono',monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6em + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 12rem;
  font-style: italic;
  `

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <PowerButton /> 
        <ParticleComponent theme='dark'/>
        <SpaceMan>
          <img src={astronaut} alt='spaceman' />
        </SpaceMan>
        <Main>
        Saya adalah seorang pengembang front-end yang berdomisili di Yogyakarta,Indonesia. Saya senang membuat situs web yang sederhana namun indah dengan pengalaman pengguna yang luar biasa.
        <br /><br />
        Saya tertarik pada seluruh stack front-end, suka mencoba hal-hal baru dan membangun proyek-proyek yang keren. Saya adalah seorang freelancer independen. Saya juga senang menulis blog dan membaca buku.
        <br /><br />
        Saya percaya bahwa segala sesuatu adalah seni ketika kita melakukannya dengan kesadaran penuh. Anda bisa terhubung dengan saya melalui tautan media sosial.

        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
      
    </ThemeProvider>
  )
}

export default AboutPage
