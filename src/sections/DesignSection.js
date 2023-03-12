import gsap from 'gsap'
import React ,{useLayoutEffect, useRef} from 'react'
import styled from 'styled-components'
/* import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) */
import Orch from "../assets/Images/Orch.png"

const Section = styled.div`
width:100vw;
height:100vh;
position:relative;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:center;
background-color:var(--white);
overflow:hidden;
`
const TextContainer = styled.p`
width:100%;
height:50vh;
z-index:0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
color:var(dark);


span{
    font-size:var(--fontxxl);
    width:90%;
    font-weight:500;
    color:var(--white);
    font-family:var(--fontA);
}
`
const TextContainer2 = styled.p`
width:100%;
height:50vh;
z-index:1;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-end;
color:var(dark);


span{
    font-size:var(--fontxxl);
    width:90%;
    font-weight:300;
    color:var(--white);
    font-family:var(--fontA);
}
`
const ImgBackground = styled.div`
idth:100vw;
height:100vh;
position:absolute;
top:0;
left:0;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:center;
z-index:0;


img{
    width:100%;
    height:auto;
    object-fit:contain;
}
`

const DesignSection = () => {

    
    const container = useRef(null)
    const textOne = useRef(null)
    const textTwo = useRef(null)


 /*    useLayoutEffect(() => {

        const el = container.current;
        
        gsap.fromTo(el,{rotation:0},{rotation:180,duration:5,scrollTrigger:{
            trigger:el,
            start:"top-=500 top",
            end:"bottom top",
            scrub:true,
        }})
            
       

        
    },[]) */

    useLayoutEffect(() => {

        
        let tl = gsap.timeline({
           scrollTrigger:{
            trigger:container.current,
                start:"top-=500 top",
                end:"bottom top",
                duration:10,
                scrub:true,
                
               }
            
        }).fromTo(textOne.current, {x:0}, {x:"15%"},"key1").fromTo(textTwo.current, {x:"20%"}, {x:"-10%"},"key1")

        return ()=>{
            if(tl) tl.kill();
        };

    },[])

  return (
    <Section ref={container}>
        <ImgBackground> <img src={Orch} alt="" /></ImgBackground>
        <TextContainer ref={textOne}>
            <span>Playing the violin for the first time is a liberating feeling.</span>
        </TextContainer>

        <TextContainer2 ref={textTwo}>
            <span>Free the music of this wonderful instrument !</span>
        </TextContainer2>
            
    </Section>
  )
}

export default DesignSection;