import React, { useEffect } from 'react'
import { Link } from '../componets/AllSvg'
import styled from 'styled-components'
import { Anchor } from '../componets/AllSvg'

const Container = styled.div`
  posisiton: relative;
`
const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
  .chain {
    transform: roatate(135deg);
  }
`

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`

const AnchorComponent = (props) => {
  const ref = React.useRef(null)
  const hiddenRef = React.useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowSize = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const diff = Math.max(bodyHeight - (scrollPosition + windowSize))
      const diffP = (diff * 100) / (bodyHeight - windowSize);
      ref.current.style.transform = `translateY(-${diffP}%)`;

      if (window.pageYOffset > 5) {
        hiddenRef.current.style.display = 'none'
      } else {
        hiddenRef.current.style.display = 'block'
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor width={70} height={70} fill='currentColor' />
      </PreDisplay>
      <Slider ref={ref}>
        {
          [...Array(props.numbers)].map((x, id) => {
            return <Link key={id} width={25} height={25} fill='currentColor' className="chain" />
          })
        }
      </Slider>
    </Container>
  )
}

export default AnchorComponent
