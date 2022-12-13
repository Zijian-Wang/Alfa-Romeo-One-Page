import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { StrictMode, Suspense } from 'react'
import CarCollections from './carCollections'

export default function HLCollections(params) {
  const { cameras } = useGLTF('./carModel/Collection_r3f.gltf')
  return (
    <>
      <StrictMode>
        <Canvas camera={cameras[0]}>
          <Suspense fallback={null}>
            <CarCollections />
          </Suspense>
        </Canvas>
      </StrictMode>
    </>
  )
}
