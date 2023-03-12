import React from 'react'
import styled, { keyframes } from 'styled-components'
import img from "../assets/Images/A15-Bionic.png"

const Section = styled.div`
width:100vw;
height:100vh;
position:relative;
display:flex;
justify-content:flex-end;
align-items:center;
background-color:var(--dark);
color:var(--white);
overflow:hidden;
`
const glow = keyframes`
0%{
  box-shadow:1px 1px 10px var(--white);
}
50%{
  box-shadow:2px 2px 25px var(--white);
}
100%{
  box-shadow:1px 1px 10px var(--white);
}
`

const Title = styled.div`
width:100%;
text-align:center;
position:absolute;
bottom:4rem;
left:50%;
transform:translate(-50%);
font-size:var(--fontmd);
z-index:1;
background-image:linear-gradient(-90deg, var(--gradient));
    background-clip:text;
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
`
const Processor = styled.div`
width:100%;
height:100vh;
position:absolute;
/* top:50%;
left:50%
transform:translate(-50%,-50%); */
display:flex;
justify-content:center;
align-items:center;


img{
  width:500px;
  height:auto;
  /* animation: ${glow} 3s ease infinite; */
}
`

const Text = styled.div`
font-size:var(--fontxs);
color:var(--greyLight);
width:30%;
height:10vh;
display:flex;
flex-direction:column;
justify-content:center;

span{
  margin:0.2rem, 0;
  padding-right:2rem;
  font-size:1.5rem;
}

`



function ProcessorSection() {
  return (
    <Section>
      <Title>professional classes</Title>
      <Processor>
        <img src={img} alt="IMG processor" />
      </Processor>
      <Text>
        <span>I will teach you the method of learning from the school of fine arts of Berklee.</span>
        <span>my teaching method has helped many enthusiasts realize their dreams!</span>
      </Text>
    </Section>
  )
}

export default ProcessorSection