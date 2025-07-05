import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import BlogComponent from './BlogComponent'
import {Blogs} from '../data/BlogData'
import AnchorComponent from '../subComponents/Anchor'

const MainContainer = styled.div`
  background: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
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
  const [numbers, setNumbers] = useState(0);
  useEffect(() => {
    const num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, [])
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent numbers={numbers}/>
        <Center>
          <Grid>
            {Blogs.map(blog => {
              return (
                 <BlogComponent key={blog.id} blog={blog}/>
              )
            })}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  )
}

export default BlogPage
