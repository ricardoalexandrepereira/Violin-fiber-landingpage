import React, { useRef,useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
/* import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger) */

export function Model2({...props}) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')

  let camera = useThree(state => state.camera);
  

useLayoutEffect(() =>{

  camera.position.set(0,30,-5)
  camera.rotation.set(-0.3,0,3.1)
 
},[])

  return (
    <group useRef={group} {...props} dispose={null}>
      
    <group position={[0, 0.79, 3.98]} rotation={[-2.05, 0, 0]}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_4.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.aiStandardSurface2SG} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.aiStandardSurface2SG} />
    </group>
  </group>
  )
}

useGLTF.preload('/scene.gltf')
