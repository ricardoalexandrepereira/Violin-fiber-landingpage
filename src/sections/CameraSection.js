import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import v1 from "../assets/video/violin.mp4"
import v2 from "../assets/video/forest.mp4"

const Section = styled.div`
width:100vw;
height:100vh;
position:relative;
z-index:1;
background-color:var(--dark);
color:var(--white);
overflow:hidden;
`

const V1 = styled.video`
position:absolute;
top:0;
left:0;
width:100%;
height:100vh;
object-fit:cover;
object-position:bottom;
z-index:2;
`

const V2 = styled.video`
position:absolute;
top:0;
right:40%;
width:60%;
height:auto;
z-index:3;
object-position:bottom;
`

const TitleContainer = styled.div`
width:50%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
position:absolute;
top:0;
right:0;
margin-top:3rem;


&>*:nth-child(2){
    margin-left:6rem;
    font-size:var(--fontxl);
}
&>*:nth-child(3){
    margin-left:12rem;
}
&>*:nth-child(4){
    margin-left:12rem;
    font-size:var(--fontxl);
}
&>*:nth-child(5){
    margin-left:12rem;
}
`
const Title = styled.h1`
font-size:var(--fontBig);
z-intex:5;
text-transform:capitalize;
`
const CameraSection = () => {

    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const sectionRef = useRef(null);
    const TitleRef = useRef(null);

    let elements = gsap.utils.selector(TitleRef)


    useLayoutEffect(()=>{

        const Elem = sectionRef.current;
        const video1Elem = videoRef1.current;
        const video2Elem = videoRef2.current;
    
         
    gsap.to(Elem, {
        scrollTrigger:{
            trigger:Elem,
            start:"top top",
            end:"bottom+=500 bottom",
            scrub: true,
            pin:true,
            /* pinSpacing:true, */
        }

        
    })
    
    let t2 = gsap.timeline({
        scrollTrigger:{
            trigger:Elem,
            start:"top top",
            end:"bottom+=500 bottom",
            scrub: true,
            
        }

    }).to(video1Elem,{scale:0.3},"key1").to(video2Elem,{scale:0.6},"key1")

    elements("h1").forEach((el)=>
        t2.fromTo(el,{
            scrollTrigger:{
                trigger:el,
                start:"top top",
                end:"bottom bottom",
                scrub: true,
                
            },
            x:100,
            opacity:0,
        },
        {
            x:0,
            opacity:1,
        }
        )
        )
   
    });

  return (
    <Section ref={sectionRef}>
            <V1 ref={videoRef1} src={v1} type="video/mp4" autoPlay muted loop></V1>
            <V2 ref={videoRef2} src={v2} type="video/mp4" autoPlay muted loop></V2>
            <TitleContainer ref={TitleRef}>
                <Title>Me</Title>
                <Title>the</Title>
                <Title>Music</Title>
                <Title>and</Title>
                <Title>You</Title>
            </TitleContainer>
    </Section>
  )
}

export default CameraSection