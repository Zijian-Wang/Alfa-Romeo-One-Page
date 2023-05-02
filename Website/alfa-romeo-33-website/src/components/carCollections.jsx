/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React from 'react'
import { useGLTF } from '@react-three/drei'
import MatcapMaterial from './matcapMaterial'
// import { useControls } from 'leva'

function Car(props) {
  const { nodes } = useGLTF('./carModel/Collection_Single_r3f.gltf')
  const material = MatcapMaterial()
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.singleCar.geometry}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}
function Ground(props) {
  const { nodes } = useGLTF('./carModel/Collection_Single_r3f.gltf')
  const material = MatcapMaterial('wireframe')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.singleGround.geometry}
        material={material}
        wireframe={true}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

export function CarCollection(props) {
  // const control = useControls({
  //   x1: {
  //     value: -6,
  //     step: 0.01,
  //     min: -15,
  //     max: 12,
  //   },
  //   x2: {
  //     value: -2,
  //     step: 0.01,
  //     min: -15,
  //     max: 12,
  //   },
  //   x3: {
  //     value: 2,
  //     step: 0.01,
  //     min: -15,
  //     max: 12,
  //   },
  //   x4: {
  //     value: 6,
  //     step: 0.01,
  //     min: -15,
  //     max: 12,
  //   },
  //   x5: {
  //     value: 10,
  //     step: 0.01,
  //     min: -15,
  //     max: 12,
  //   },
  //   y1: {
  //     value: 5,
  //     step: 0.01,
  //     min: -15,
  //     max: 12,
  //   },
  //   y2: {
  //     value: 2.5,
  //     step: 0.01,
  //     min: -15,
  //     max: 12,
  //   },
  //   y3: {
  //     value: 0,
  //     step: 0.01,
  //     min: -15,
  //     max: 12,
  //   },
  //   y4: {
  //     value: -2.5,
  //     step: 0.01,
  //     min: -15,
  //     max: 12,
  //   },
  //   y5: {
  //     value: -5,
  //     step: 0.01,
  //     min: -15,
  //     max: 12,
  //   },
  // })
  return (
    <>
      <group {...props} dispose={null}>
        <Car position={[-6, 5, 0]} />
        <Car position={[-2, 5, 0]} />
        <Car position={[2, 5, 0]} />
        <Car position={[6, 5, 0]} />
        <Car position={[10, 5, 0]} />

        <Car position={[-6, 2.5, 0]} />
        <Car position={[-2, 2.5, 0]} />
        <Car position={[2, 2.5, 0]} />
        <Car position={[6, 2.5, 0]} />
        <Car position={[10, 2.5, 0]} />

        <Car position={[-6, 0, 0]} />
        <Car position={[-2, 0, 0]} />
        <Car position={[2, 0, 0]} />
        <Car position={[6, 0, 0]} />
        <Car position={[10, 0, 0]} />

        <Car position={[-6, -2.5, 0]} />
        <Car position={[-2, -2.5, 0]} />
        <Car position={[2, -2.5, 0]} />
        <Car position={[6, -2.5, 0]} />
        <Car position={[10, -2.5, 0]} />

        <Car position={[-6, -5, 0]} />
        <Car position={[-2, -5, 0]} />
        <Car position={[2, -5, 0]} />
        {/* <Ground position={[6, -5, 0]} />
        <Ground position={[10, -5, 0]} /> */}
        {/* <PerspectiveCamera
          makeDefault={true}
          far={1000}
          near={0.1}
          fov={19.16}
          position={[-21.46, 15.26, 45.44]}
          rotation={[-0.34, -0.41, -0.14]}
        /> */}
      </group>
    </>
  )
}

useGLTF.preload('./carModel/Collection_Single_r3f.gltf')