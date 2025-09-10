'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function DataPlexus(props: any) {
  const ref = useRef<THREE.Points>(null!)
  const [sphere] = useMemo(() => {
    const sphere = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)
      const r = 2 + Math.random() * 2
      
      sphere[i * 3] = r * Math.sin(theta) * Math.cos(phi)
      sphere[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi)
      sphere[i * 3 + 2] = r * Math.cos(theta)
    }
    return [sphere]
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export function ThreeHero() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ height: '100vh' }}
      >
        <DataPlexus />
      </Canvas>
    </div>
  )
}