/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
import { useState } from 'react'
import { useEffect } from 'react'
import MatcapMaterial from './matcapMaterial'
// import { useControls } from 'leva'

export default function CarAnimModel(props) {
  const group = useRef()
  const { nodes, animations } = useGLTF('./carModel/Door_r3f_02.gltf')
  const matcapMaterial = MatcapMaterial()

  const [doorClosed, setDoorClose] = useState(true)
  const { actions } = useAnimations(animations, group)
  const crossFadeTime = 0.2

  // use leva to create 3d position control
  // const controls = useControls({
  //   position: {
  //     value: [0, 0, 0],
  //     step: 0.01,
  //   },
  //   rotation: {
  //     value: [0, 0, 0],
  //     step: 0.01,
  //   },
  //   scale: {
  //     value: 1,
  //     step: 0.01,
  //     min: 0.1,
  //     max: 2,
  //   },
  // })

  function toggleDoor() {
    setDoorClose(!doorClosed)
  }

  // Play door close/open animation based on boolean value, which is triggered by mouse click event
  useEffect(() => {
    window.setTimeout(() => {}, 1000)
    if (doorClosed) {
      // Play Door_Left_Open and Door_Right_Open actions and only play them once
      actions.Door_Left_Open.reset().fadeIn(crossFadeTime).play()
      actions.Door_Right_Open.reset().fadeIn(crossFadeTime).play()
      actions.Door_Left_Open.clampWhenFinished = true
      actions.Door_Right_Open.clampWhenFinished = true
      actions.Door_Left_Open.setLoop(THREE.LoopOnce, 1)
      actions.Door_Right_Open.setLoop(THREE.LoopOnce, 1)
      // console.log(doorClosed)

      return () => {
        // console.log('Door change from open => close')
        actions.Door_Left_Open.crossFadeTo(
          actions.Door_Left_Close,
          crossFadeTime
        )
        actions.Door_Right_Open.crossFadeTo(
          actions.Door_Right_Close,
          crossFadeTime
        )
      }
    } else {
      // Play Door_Left_Close and Door_Right_Close actions and only play them once
      actions.Door_Left_Close.reset().fadeIn(crossFadeTime).play()
      actions.Door_Right_Close.reset().fadeIn(crossFadeTime).play()
      actions.Door_Left_Close.clampWhenFinished = true
      actions.Door_Right_Close.clampWhenFinished = true
      actions.Door_Left_Close.setLoop(THREE.LoopOnce, 1)
      actions.Door_Right_Close.setLoop(THREE.LoopOnce, 1)
      // console.log(doorClosed)

      return () => {
        // console.log('Door change from Close => Open')
        actions.Door_Left_Close.crossFadeTo(
          actions.Door_Left_Open,
          crossFadeTime
        )
        actions.Door_Right_Close.crossFadeTo(
          actions.Door_Right_Open,
          crossFadeTime
        )
      }
    }
  }, [
    actions.Door_Left_Close,
    actions.Door_Left_Open,
    actions.Door_Right_Close,
    actions.Door_Right_Open,
    doorClosed,
  ])

  return (
    <>
      <group ref={group} {...props} dispose={null} onClick={toggleDoor}>
        <group
          name="Scene"
          position={[0.46, 0, 0.7]}
          rotation={[0, 0.44, 0]}
          scale={1}
        >
          <group name="AlfaRomeo33" rotation={[1.57, 0, 0]} scale={0.01}>
            <group
              name="Door_Left"
              position={[9.48, -1.87, -102.29]}
              rotation={[0.24, -0.27, 0.73]}
            >
              <mesh
                name="Body_doors"
                geometry={nodes.Body_doors.geometry}
                material={matcapMaterial}
                position={[12.25, 7.12, 47.55]}
                rotation={[-1.86, 0.64, 0.46]}
                scale={100}
              />
              <mesh
                name="Glass_doors_01"
                geometry={nodes.Glass_doors_01.geometry}
                material={matcapMaterial}
                position={[-12.55, -4.47, 14.43]}
                rotation={[-1.86, 0.64, 0.46]}
                scale={100}
              />
            </group>
            <group
              name="Door_Right"
              position={[-9.48, -1.87, -102.29]}
              rotation={[0.25, 0.28, -0.73]}
            >
              <mesh
                name="Body_doors_2"
                geometry={nodes.Body_doors_2.geometry}
                material={matcapMaterial}
                position={[-12.88, 7.12, 47.38]}
                rotation={[-1.87, -0.64, -0.48]}
                scale={100}
              />
              <mesh
                name="Glass_doors_01_2"
                geometry={nodes.Glass_doors_01_2.geometry}
                material={matcapMaterial}
                position={[11.56, -5.18, 14.28]}
                rotation={[-1.87, -0.64, -0.48]}
                scale={100}
              />
            </group>
            <mesh
              name="Car_Body_Still"
              geometry={nodes.Car_Body_Still.geometry}
              material={matcapMaterial}
              position={[0, 195.78, -24.79]}
            />
          </group>
        </group>
        <PerspectiveCamera
          name="Cam_Front"
          makeDefault={true}
          far={1000}
          near={0.1}
          fov={17.06}
          position={[2.88, 0.82, 5.76]}
          rotation={[-0.04, 0.5, 0.02]}
        />
      </group>
    </>
  )
}

useGLTF.preload('./carModel/Door_r3f_02.gltf')
