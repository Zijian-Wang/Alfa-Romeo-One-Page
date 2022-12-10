import * as THREE from 'three'
import { useMatcapTexture } from '@react-three/drei'

export default function MatcapMaterial(params) {
  // Black matcap texture
  // const [matcapBlack] = useMatcapTexture('0A0A0A_A9A9A9_525252_747474', 256)

  // Black matcap texture
  // const [matcapTire] = useMatcapTexture('090909_9C9C9C_555555_7C7C7C', 256)

  // diffused matcap texture
  const [matcapTexture] = useMatcapTexture('070B0C_B2C7CE_728FA3_5B748B', 256)

  const matcapMaterial = new THREE.MeshMatcapMaterial({
    matcap: matcapTexture,
    color: '#ff6d63',
  })

  return matcapMaterial
}
