import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import styled from 'styled-components'
import { Model3 } from '../components/Scene3'
import violin from "../assets/video/lastSection.mp4"

const Container = styled.div`
width:100vw;
height:100vh;
position:relative;
z-index:1;
background-color: var(--white);
overfow:hidden;
`

const Section = styled.div`
width:100vw;
height:100vh;
position:relative;
z-index:1;
background-color:"#9BB5CE";
`

const Violin = styled.video`
position:absolute;
top:0;
left:0;
width:100%;
height:100vh;
object-fit:cover;
object-position:bottom;
z-index:-1;
`
const Phone = styled.div`
width:100%;
height:70%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;
cursor:grab;
padding-top:4rem;
`

const Colors = styled.ul`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:absolute;
left:35%;
top:50%;
transform:translate(-50%,-50%);
`

const Color = styled.li`
list-style:none;
width:1.5rem;
height:1.5rem;
cursor:pointer;
border-radius:50%;
background-color:${props => props.color};
margin:0.5rem 0;
border: 1px solid var(--dark);
`

const Details = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:-50px;
color:var(--white);
`

const Subtitle = styled.h2`
font-size:var(--fontlg);
font-family:var(--fontR);
color:var(--white);
z-index:5;
`
const Title = styled.h2`
font-size:var(--fontmd);
font-family:var(--fontR);
padding:0.6rem;
color:var(--white);
z-index:5;
`

const ButtonContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding-top:1rem;
`
const Email = styled.h2`
font-size:var(--fontsm);
color:var(--white);
display:flex;
justify-content:center;
align-items:flex-start;
z-index:5;
width:100%;
height:20px;
font-weight:100;
`
/* const Btn = styled.button`
display:flex;
justify-content:center;
align-items:center;
margin:0;
padding:0.4rem 1rem;
border-radius:50px;
border:none;
outline:none;
background-color:var(--blue);
color:var(--white);
cursor:pointer;

&:hover{
    opacity:0.7;
}
` */

/* const BtnLink = styled.a`
text-decoration:none;
color:var(--blue);
margin-left:1.5rem;

&:hover{
    text-decoration:underline;
}
`
*/
const IndicatorText = styled.div`
font-size:var(--fontsm);
position:absolute;
top:1rem;
color:var(--white);
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

const PricingSection = () => {

    const { materials } = useGLTF('/scene.gltf')
    const backgroundFirst = useRef(null);

    let updateColor = (color, rgbColor)=>{

        materials.aiStandardSurface2SG.color.set(color);

        backgroundFirst.current.style.backgroundColor = `rgba(${rgbColor},0.4)` 
    }
  return (
    <Container>
        <Section ref={backgroundFirst}>
        <Violin src={violin} type="video/mp4" autoPlay muted loop></Violin>
        <Overlay></Overlay>
        <Phone>

            <IndicatorText>360&deg; &#x27F2;</IndicatorText>

        <Canvas camera={{fov:14}}>
            <ambientLight intensity={1}/>
            <directionalLight position={0.4}/>

            <Suspense fallback={null}>
              <Model3 />
            </Suspense>

              <Environment preset="sunset"/>
              <OrbitControls enableZoom={false} />
        </Canvas>

        <Colors>

            <Color color="#9BB5CE" onClick={()=> updateColor("#9BB5CE", "155, 181, 206")}/>
            <Color color="#F9E5C9" onClick={()=> updateColor("#F9E5C9", "249, 229, 201")}/>
            <Color color="#505F4E" onClick={()=> updateColor("#505F4E", "80, 95, 78")}/>
            <Color color="#574f6f" onClick={()=> updateColor("#574f6f", "87, 79, 111")}/>
            <Color color="#A50011" onClick={()=> updateColor("#A50011", "165, 0, 17")}/>
            <Color color="#215E7C" onClick={()=> updateColor("#215E7C", "33, 94, 124")}/>
        
        </Colors>

        </Phone>

        <Details>
            <Subtitle>Stradivarius Lessons</Subtitle>
               <Title>Solaris</Title>
               <Subtitle>30 Eur / Day</Subtitle>
            <ButtonContainer>
                <Email>Send me an Email to book: Ellinasharz@gmail.com</Email>
                {/* <Btn>Buy</Btn>
                <BtnLink href="#">Learn more </BtnLink> */}
            </ButtonContainer>
        </Details>


    </Section>
    </Container>
  )
}

export default PricingSection