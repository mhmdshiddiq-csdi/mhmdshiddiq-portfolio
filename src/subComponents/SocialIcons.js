import React from 'react'
import { NavLink } from 'react-router-dom'
import { Facebook, Github, Linkedin, YouTube } from '../componets/AllSvg'
import styled from 'styled-components'
import {DarkTheme} from '../componets/Themes'
import { motion } from 'framer-motion'

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  &>*:not(:last-child) {
    margin: 0.5rem 0;
  }
`
const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{scale: 0}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type: 'spring', duration: 1, delay: 1}}
      >
        <NavLink style={{color: 'inherit'}} target='_blank' to="//github.com/mhmdshiddiq-csdi">
          <Github width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}  />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{scale: 0}}
        animate={{scale: [0,1,1.5,1]}}
        transition={{type: "spring", duration: 1, delay: 1.2}}
      >
        <NavLink to="//linkedin.com/in/mhmdshiddiq/" style={{color: 'inherit'}} target='_blank'>
          <Linkedin width={35} height={35} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}  />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{scale: 0}}
        animate={{scale: [0,1,1.5,1]}}
        transition={{type: "spring", duration: 1, delay: 1.4}}
      >
        <NavLink to="//github.com/mhmdshiddiq-csdi" style={{color: 'inherit'}} target='_blank'>
          <Facebook width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}  />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{scale: 0}}
        animate={{scale: [0,1,1.5,1]}}
        transition={{type: "spring", duration: 1, delay: 1.6}}
      >
        <NavLink to="//github.com/mhmdshiddiq-csdi" style={{color: 'inherit'}} target='_blank'>
          <YouTube width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}  />
        </NavLink>
      </motion.div>
      <Line initial={{height: 0}} animate={{height: '8rem'}} transition={{type: 'spring', duration: 1, delay: 0.8}} color={props.theme} />
    </Icons>
  )
}

export default SocialIcons
