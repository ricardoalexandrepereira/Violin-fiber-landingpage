import React from 'react'
import styled from 'styled-components'
import backgroundVideo from "../assets/video/Ink - 21536.mp4"

const Section = styled.section`
width:100%;
height:100vh;
position:relative;
display:flex;
background-color:var(--dark);
overflow:hidden;
`

const Title = styled.h1`
position:absolute;
top:2rem;
left:2rem;
font-size:var(--fontlg);
font-family:var(--font);
color:var(--greyLight);
`
const VideoContainer = styled.div`
width:100vw;
height:100vh;
position:absolute;
top:0;
left:0;
z-index:0;

video{
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:bottom;
}
`
const TextContainer = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:space-between;
align-items:center;
background-image:linear-gradient(45deg,var(--gradient));
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
z-index:1;

span{
    font-size:var(--fontxxxl);
    text-transform:uppercase;
    font-weight:600;
    padding:2rem;
}
`

function HeroSection() {
  return (
    <Section>

        <VideoContainer>
        <video src={backgroundVideo} typeof="video" autoPlay muted loop/>
        </VideoContainer>
        
        <Title>Stradivarius</Title>
        <TextContainer>
            <span>elegant</span>
            <span>smooth</span>
        </TextContainer>
    </Section>
  )
}

export default HeroSection