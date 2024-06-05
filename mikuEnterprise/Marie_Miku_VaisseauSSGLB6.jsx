/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 Marie_Miku_VaisseauSSGLB6.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Marie_Miku_VaisseauSSGLB6.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Vaisseau005" geometry={nodes.Vaisseau005.geometry} material={materials.Mariku_VaisseauMiku_Text} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="Source_energie" geometry={nodes.Source_energie.geometry} material={materials.Mariku_VaisseauMiku_Text} />
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials.Mariku_VaisseauMiku_Text} position={[6.434, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/Marie_Miku_VaisseauSSGLB6.glb')
