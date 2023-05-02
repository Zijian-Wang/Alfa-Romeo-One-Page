import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
import { StrictMode, Suspense } from 'react'
import { CarCollection } from './carCollections'
import * as THREE from 'three'
// import { Perf } from 'r3f-perf'
// import { useControls } from 'leva'

export default function HLCollections(params) {
  const camera = new THREE.PerspectiveCamera(18, 4 / 3, 0.1, 1000)
  camera.position.set(-21.46, 15.26, 45.44)
  camera.rotation.set(-0.34, -0.41, -0.14)

  // const controls = useControls({
  //   position: {
  //     value: [-0.68, 0.05, 1.65],
  //     step: 0.01,
  //   },
  //   rotation: {
  //     value: [-0.07, -0.62, -0.03],
  //     step: 0.01,
  //   },
  // })

  function fallbackLoading() {
    return (
      <>
        <color attach="background" args={['#000']} />
        {/* <mesh position={[-0.68, 0.05, 1.65]} rotation={[-0.07, -0.62, -0.03]}>
          <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
          <meshBasicMaterial wireframe color="red" />
        </mesh> */}
      </>
    )
  }

  return (
    <>
      <StrictMode>
        <Canvas camera={camera}>
          {/* <Perf position="top-left" /> */}

          <PresentationControls
            global
            cursor
            config={{ mass: 4, tension: 300, friction: 50 }}
            snap={{ mass: 4, tension: 500 }}
            rotation={[0, -0.4, 0]}
            polar={[-Math.PI / 8, Math.PI / 8]}
            azimuth={[-Math.PI / 5, Math.PI / 5]}
          >
            <Suspense fallback={fallbackLoading()}>
              <CarCollection
                scale={1}
                position={[-0.68, 0.05, 1.65]}
                rotation={[-0.07, -0.62, -0.03]}
                // position={[-0.3, 0.5, 0]}
                // rotation={[-0.12, -0.6, 0]}
              />
            </Suspense>
          </PresentationControls>
        </Canvas>
      </StrictMode>
    </>
  )
}