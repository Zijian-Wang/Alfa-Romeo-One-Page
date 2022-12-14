import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
import { StrictMode, Suspense } from 'react'
import { Perf } from 'r3f-perf'
import { CarCollection } from './carCollections'
import * as THREE from 'three'
// import { useControls } from 'leva'

export default function HLCollections(params) {
  const camera = new THREE.PerspectiveCamera(18, 4 / 3, 0.1, 1000)
  camera.position.set(-21.46, 15.26, 45.44)
  camera.rotation.set(-0.34, -0.41, -0.14)

  // const controls = useControls({
  //   rotation: {
  //     value: [0, 0, 0],
  //     step: 0.01,
  //   },
  // })
  return (
    <>
      <StrictMode>
        <Canvas camera={camera}>
          <Perf position="top-left" />

          <PresentationControls
            global
            cursor
            config={{ mass: 4, tension: 300, friction: 50 }}
            snap={{ mass: 4, tension: 500 }}
            rotation={[0, -0.4, 0]}
            polar={[-Math.PI / 8, Math.PI / 8]}
            azimuth={[-Math.PI / 5, Math.PI / 5]}
          >
            <Suspense fallback={null}>
              <CarCollection
                scale={1}
                position={[-0.3, 0.5, 0]}
                rotation={[-0.1, 0, 0]}
              />
            </Suspense>
          </PresentationControls>
        </Canvas>
      </StrictMode>
    </>
  )
}
