import { Canvas } from '@react-three/fiber'
import { PresentationControls, useGLTF } from '@react-three/drei'
import CarStillModel from './carStill'
import { StrictMode, Suspense } from 'react'

export default function HLCurve() {
  const { cameras } = useGLTF('./carModel/Curve_r3f.gltf')

  return (
    <>
      <StrictMode>
        <Canvas camera={cameras[0]}>
          <PresentationControls
            global
            config={{ mass: 1, tension: 100 }}
            snap={{ mass: 1, tension: 100 }}
            rotation={[-0.05, Math.PI / 12, 0.1]}
            polar={[-Math.PI / 8, Math.PI / 8]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Suspense fallback={null}>
              <CarStillModel />
            </Suspense>
          </PresentationControls>
        </Canvas>
      </StrictMode>
    </>
  )
}

useGLTF.preload('./carModel/Curve_r3f.gltf')
