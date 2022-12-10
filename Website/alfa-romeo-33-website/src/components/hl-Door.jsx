import { Canvas } from '@react-three/fiber'
import { PresentationControls, Stage, useGLTF } from '@react-three/drei'
import CarAnimModel from './carDoorAnim'
import { StrictMode, Suspense } from 'react'

export default function HLDoor(params) {
  const { cameras } = useGLTF('./carModel/Door_r3f_02.gltf')

  return (
    <>
      <StrictMode>
        <Canvas camera={cameras[0]}>
          <Stage>
            <Suspense>
              <CarAnimModel />
            </Suspense>
          </Stage>
        </Canvas>
      </StrictMode>
    </>
  )
}

useGLTF.preload('./carModel/Door_r3f_02.gltf')
