import React from 'react'
import styled from 'styled-components'
const Text = styled.div`
  position: fixed;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  font-size: calc(5rem + 5vw);
  color: rgba(69, 66, 66, 0.3);
  z-index: 0;
`

const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  )
}

export default BigTitle
