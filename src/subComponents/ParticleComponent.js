import React from 'react'
import Particles from 'react-tsparticles'
import styled from 'styled-components'
import { loadFull } from "tsparticles";


//particles config files
import configDark from "../config/particlesjs-config.json"
import configLight from "../config/particlesjs-config-light.json"

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`

const ParticleComponent = (props) => {
  return (
    <Box>
      <Particles
        options={props.theme === "light" ? configLight : configDark}
        init={async (main) => {
          await loadFull(main);
        }}
        style={{position: 'absolute', top: 0}}
      />
    </Box>
  )
}

export default ParticleComponent
