import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLayoutEffect } from 'react'
import styled from 'styled-components'
import forest from "../assets/video/forest.mp4"


const Section = styled.div`
width:100vw;
height:100vh;
position:relative;
display:flex;
justify-content:flex-end;
align-items:center;

`
const Title = styled.h1`
position:absolute;
top:40%;
left:50%;
transform:translate(-40%,-50%);
text-transform:uppercase;
font-size:var(--fontxxl);
z-index-1;
color:var(--white);
`

const Subtitle = styled.p`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
text-transform:uppercase;
font-size:var(--fontmd);
color:var(--white);
z-index-1;
`

const Forest = styled.video`
position:absolute;
top:0;
left:0;
width:100%;
height:100vh;
object-fit:cover;
object-position:bottom;
z-index:-1;
`

const Overlay = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100vh;
object-fit:cover;
object-position:bottom;
z-index:0;
background-color:rgba(0,0,0,0.8);
`

const Battery = styled.ul`
position:absolute;
right:4rem;
list-style:none;
bachground-color:var(--white);
border:3px solid var(--dark);
border-radius:8px;
padding:0.5rem;
width:15rem;

li{
    width:100%;
    height:5rem;
    background-color:var(--dark);
    background-image:linear-gradient(-90deg,var(--gradient));
    margin:0.5rem 0;
    opacity:0;
}
`
const BatterySection = () => {

const battery = useRef(null);
let elements = gsap.utils.selector(battery);

useLayoutEffect(()=>{
    let tl = gsap.timeline({});

    elements("li").forEach(el=>{
        tl.to(el,{scrollTrigger:{trigger:el,start:"top center", end:"bottom center", scrub:true}, opacity:1})
    })

    return ()=> {

    }
},[])

  return (
    <Section id='battery'>
      <Forest src={forest} type="video/mp4" autoPlay muted loop></Forest>
      <Overlay></Overlay>
           <Title>Join us !</Title>
            <Subtitle>come recharge your batteries on nature !</Subtitle>
           <Battery ref={battery}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
           </Battery>
    </Section>
  )
}

export default BatterySection