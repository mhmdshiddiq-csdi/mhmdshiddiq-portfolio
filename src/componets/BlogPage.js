import React from 'react'
import styled from 'styled-components'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'


const MainContainer = styled.div`
  background: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
`
const Container = styled.div`
 background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
 width: 100%;
 height: auto;
 position: relative;
 padding-bottom: 5rem;

`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`

const BlogPage = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <Center>
          <Grid>
            <h1>Blog</h1>
            <h1>Blog</h1>
            <h1>Blog</h1>
            <h1>Blog</h1>
            <h1>Blog</h1>
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  )
}

export default BlogPage
