
import styled, { keyframes } from 'styled-components'
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
/* import { BsMusicNote } from "react-icons/bs"; */
/* import music from "../assets/music/song.mp3" */


const Section = styled.section`
width:100vw;
height:100vh;
position:relative;
display:flex;
justify-content:center;
align-items:center;

`

/* const Btn = styled.div`
position:absolute;
display:flex;
justify-content:center;
align-items:center;
top:0%;
right:5%;
background-color:var(--white);
border-radius:50%;
width:3rem;
height:3rem;
margin-top:3rem;
color:red;
cursor:pointer;

&:hover{
  color:blue;
}
` */
const moveup = keyframes`
100%{
    transform:translateY(0);
}
`
const TextContainer = styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:var(--dark);
color:var(--white);
`
const Text = styled.p`
width:50%;
font-size:var(--fontlg);
position:relative;
height:var(--fontmd);
overflow:hidden;


span{
    position:absolute;
    transform:translateY(3rem);
    animation-name:${moveup};
    animation-duration:2.5s;
    animation-timing-function:ease;
    animation-fill-mode:forwards;
    font-family:var(--fontL);
    background-image:linear-gradient(-45deg, var(--gradient));
    background-clip:text;
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    animation-delay:${props => props.delay}
}
.author{
    width:100%;
    text-align:end;
}
`



function Quote() {
  
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null)



  useLayoutEffect(()=>{

    
    let Elem = sectionRef.current;

   let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: "top top",
      pin:true,
      pinSpacing:false
      
      
    });
    return() =>{
      if(trigger) trigger.kill();
    }
  },[])

 
 

  return (
    <Section ref={sectionRef}>
      {/* <Btn> <BsMusicNote size={30} /></Btn> */}
        <TextContainer>
       <Text delay="0s"> <span>&#8220; The music is not in the notes,</span></Text>
       <Text delay="0.4s"> <span>&nbsp;&nbsp;&nbsp;but in the silence between.</span></Text>

       <br />
       <Text delay="1.4s"> <span className='author'>Amadeus Mozart&#8221;</span></Text>
        </TextContainer>
    </Section>
  )
}

export default Quote