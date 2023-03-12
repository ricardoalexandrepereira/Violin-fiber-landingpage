import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'

const Section = styled.div`
width:100vw;
height:100vh;
position:relative;
display:flex;
justify-content:space-around;
flex-direction:column;
background-color:var(--dark);
color:var(--white);
&>*:nth-child(even){
    align-self:flex-end;
    margin-right:4rem;
    text-align:right;
}

&>*:nth-child(odd){
    
    margin-left:4rem;
    
}
`

const MainTitle = styled.h1`
font-size:var(--fontxxxl);
font-family:var(--fontA);
padding-top:7rem;
background-image:linear-gradient(45deg, var(--gradient));
background-clip:text;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
`

const TextBlockRight = styled.div`
display:flex;
flex-direction:column;
align-items:flex-end;
width:50%;
`

const Title = styled.div`
font-size:var(--fontxl);
margin-bottom:1rem;
font-family:var(--fontA);
`
const Text = styled.p`
font-size:var(--fontmd);
color:var(--greyLight);
margin-bottom:0.5rem;
width:55%;
    
`
const TextBlockLeft = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
width:50%;
`
const TextContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
transform:rotate(-25deg);
z-index:1;
margin-bottom:4rem;
`
const MovingText = styled.h1`
font-size:var(--fontxxxl);
font-family:var(--fontA);
background-image:linear-gradient(45deg, var(--gradient));
background-clip:text;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
`

const DisplaySection = () => {

    const container = useRef(null)
    const textOne = useRef(null)
    const textTwo = useRef(null)

    useLayoutEffect(() => {
        let tl = gsap.timeline({
           scrollTrigger:{
            trigger:container.current,
                start:"top-=500 top",
                end:"bottom top",
                scrub:true,
               
           }
            
        })
        .fromTo(textOne.current, {x:0}, {x:"20%"},"key1")
        .fromTo(textTwo.current, {x:0}, {x:"-20%"},"key1")

        return ()=>{
            if(tl)tl.kill();
        };

    },[])

  return (
    <Section>
        <MainTitle>
            Immersive Lessons
        </MainTitle>
        <TextBlockRight>
            <Title>choose the day</Title>
            <Text>
            The lessons are fully customized for you !
            </Text>
        </TextBlockRight>
        <TextBlockLeft ref={container}>
            <Title>In Nature</Title>
            <Text>
            Outdoor classes in the middle of nature !
            </Text>
        </TextBlockLeft>

        <TextContainer>
            <MovingText ref={textOne}>here with you!</MovingText>
            <MovingText ref={textTwo}>we are closer than ever</MovingText>
        </TextContainer>
    </Section>
  )
}

export default DisplaySection