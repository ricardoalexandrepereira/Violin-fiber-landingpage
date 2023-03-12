
import './App.css';
import BatterySection from './sections/BatterySection';
import ColorSection from './sections/ColorSection';
import DesignSection from './sections/DesignSection';
import DisplaySection from './sections/DisplaySection';
import HeroSection from './sections/HeroSection';
import ProcessorSection from './sections/ProcessorSection';
import PhoneModel from './sections/PhoneModel';
import Quote from './sections/Quote';
import { GlobalStyle } from './styles/GlobalStyle';
import CameraSection from './sections/CameraSection';
import PricingSection from './sections/PricingSection';
import styled from 'styled-components'
import sound from "./assets/music/song.mp3"
import { BsMusicNote } from "react-icons/bs";
/* import {useState } from 'react'; */

const Button = styled.button`
width:50px;
height:50px;
position:absolute;
top:5%;
left:3%;
z-index:999;
border-radius:50%;
color:red;

`

function App() {


  

function Play(){
  new Audio(sound).play()
  
}


  return (
    <>

    <Button onClick={Play}><BsMusicNote size={30} /></Button>
      <GlobalStyle />
      <Quote />
      <PhoneModel />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection/>
      <BatterySection />
      <ColorSection />
      <CameraSection/>
      <PricingSection />
      
    </>
  );
}

export default App;
