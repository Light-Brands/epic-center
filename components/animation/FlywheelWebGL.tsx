'use client'

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { 
  Float, 
  MeshDistortMaterial,
  Sparkles,
  Trail,
  Html,
  Environment,
  PerspectiveCamera,
} from '@react-three/drei'
import * as THREE from 'three'
import { CheckCircle2, TrendingUp, Brain, Award } from 'lucide-react'

// Flowing particles along the ring
function FlowingParticles({ count = 150, radius = 3 }: { count?: number; radius?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const speed = 0.15 + Math.random() * 0.25
      const offset = Math.random() * Math.PI * 2
      const yOffset = (Math.random() - 0.5) * 0.6
      const radiusOffset = (Math.random() - 0.5) * 0.5
      const scale = 0.02 + Math.random() * 0.03
      temp.push({ angle, speed, offset, yOffset, radiusOffset, scale })
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()
    
    particles.forEach((particle, i) => {
      const angle = particle.angle + time * particle.speed + particle.offset
      const r = radius + particle.radiusOffset
      const x = Math.cos(angle) * r
      const z = Math.sin(angle) * r
      const y = particle.yOffset + Math.sin(time * 2 + particle.offset) * 0.15
      
      dummy.position.set(x, y, z)
      dummy.scale.setScalar(particle.scale + Math.sin(time * 3 + particle.offset) * 0.01)
      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })
    
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#D4A63B" transparent opacity={0.9} />
    </instancedMesh>
  )
}

// Glowing ring/torus with emission
function GlowingRing({ radius = 3 }: { radius?: number }) {
  const ringRef = useRef<THREE.Mesh>(null)
  const innerRingRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!ringRef.current || !innerRingRef.current) return
    const time = state.clock.getElapsedTime()
    ringRef.current.rotation.x = Math.sin(time * 0.2) * 0.1
    ringRef.current.rotation.z = Math.cos(time * 0.15) * 0.05
    innerRingRef.current.rotation.x = -Math.sin(time * 0.2) * 0.08
    innerRingRef.current.rotation.z = -Math.cos(time * 0.15) * 0.04
  })

  return (
    <group>
      {/* Main ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.06, 32, 128]} />
        <meshStandardMaterial 
          color="#D4A63B" 
          emissive="#D4A63B"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Inner glowing ring */}
      <mesh ref={innerRingRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius * 0.85, 0.03, 16, 64]} />
        <meshStandardMaterial 
          color="#D4724D" 
          emissive="#D4724D"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Outer glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.2, 16, 64]} />
        <meshBasicMaterial 
          color="#D4A63B" 
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  )
}

// Central hub with pulsing glow
function CentralHub() {
  const hubRef = useRef<THREE.Mesh>(null)
  const outerRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!hubRef.current || !outerRef.current) return
    const time = state.clock.getElapsedTime()
    hubRef.current.rotation.y = time * 0.3
    hubRef.current.rotation.x = Math.sin(time * 0.5) * 0.2
    
    // Pulsing outer glow
    const pulse = 1 + Math.sin(time * 2) * 0.1
    outerRef.current.scale.setScalar(pulse)
  })

  return (
    <group>
      {/* Outer glow sphere */}
      <mesh ref={outerRef} scale={1.4}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial 
          color="#D4A63B"
          transparent
          opacity={0.15}
        />
      </mesh>
      
      {/* Inner core with distortion */}
      <mesh ref={hubRef}>
        <icosahedronGeometry args={[0.7, 2]} />
        <MeshDistortMaterial
          color="#1F483A"
          emissive="#D4A63B"
          emissiveIntensity={0.6}
          metalness={0.95}
          roughness={0.05}
          distort={0.25}
          speed={3}
        />
      </mesh>
      
      {/* Sparkles around hub */}
      <Sparkles 
        count={60} 
        scale={2.5} 
        size={3} 
        speed={0.4} 
        color="#D4A63B"
        opacity={0.7}
      />
    </group>
  )
}

// Orbiting light trail
function OrbitingLight({ radius = 3, speed = 0.5, color = "#D4A63B", yAmplitude = 0.3 }: { 
  radius?: number
  speed?: number
  color?: string
  yAmplitude?: number 
}) {
  const lightRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!lightRef.current) return
    const time = state.clock.getElapsedTime() * speed
    lightRef.current.position.x = Math.cos(time) * radius
    lightRef.current.position.z = Math.sin(time) * radius
    lightRef.current.position.y = Math.sin(time * 2) * yAmplitude
  })

  return (
    <Trail
      width={0.8}
      length={12}
      color={color}
      attenuation={(t) => t * t}
    >
      <mesh ref={lightRef}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Trail>
  )
}

// Floating step node with HTML overlay
function StepNode({ 
  position, 
  step, 
  title, 
  description,
  Icon,
  delay = 0 
}: { 
  position: [number, number, number]
  step: string
  title: string
  description: string
  Icon: React.ComponentType<{ className?: string }>
  delay?: number
}) {
  const groupRef = useRef<THREE.Group>(null)
  const sphereRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!groupRef.current || !sphereRef.current) return
    const time = state.clock.getElapsedTime()
    
    // Gentle floating
    groupRef.current.position.y = position[1] + Math.sin(time * 0.8 + delay) * 0.15
    
    // Sphere rotation
    sphereRef.current.rotation.y = time * 0.5
    sphereRef.current.rotation.x = Math.sin(time * 0.3 + delay) * 0.3
  })

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.05}
      floatIntensity={0.2}
      floatingRange={[-0.03, 0.03]}
    >
      <group ref={groupRef} position={position}>
        {/* Glowing sphere node */}
        <mesh ref={sphereRef}>
          <icosahedronGeometry args={[0.4, 1]} />
          <meshStandardMaterial 
            color="#1F483A"
            emissive="#D4A63B"
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Outer glow */}
        <mesh>
          <sphereGeometry args={[0.55, 16, 16]} />
          <meshBasicMaterial 
            color="#D4A63B"
            transparent
            opacity={0.12}
          />
        </mesh>
        
        {/* HTML overlay card */}
        <Html
          center
          distanceFactor={6}
          position={[0, -1, 0]}
          style={{
            transition: 'all 0.3s',
            opacity: 1,
            transform: 'scale(1)',
            pointerEvents: 'none',
          }}
          zIndexRange={[100, 0]}
        >
          <div className="bg-primary-800/95 backdrop-blur-md border border-secondary-400/30 rounded-xl p-3 w-44 text-center shadow-xl">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-500 flex items-center justify-center mx-auto mb-2 text-primary-900 font-bold">
              {step}
            </div>
            <Icon className="w-5 h-5 text-secondary-400 mx-auto mb-1.5" />
            <h4 className="text-white font-semibold text-xs mb-0.5">{title}</h4>
            <p className="text-white/70 text-[10px] leading-relaxed">{description}</p>
          </div>
        </Html>
      </group>
    </Float>
  )
}

// Connecting arc between nodes
function ConnectionArc({ startAngle, endAngle, radius }: { startAngle: number; endAngle: number; radius: number }) {
  const curve = useMemo(() => {
    const points = []
    const segments = 32
    for (let i = 0; i <= segments; i++) {
      const angle = startAngle + (endAngle - startAngle) * (i / segments)
      points.push(new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(i / segments * Math.PI) * 0.2 - 0.1,
        Math.sin(angle) * radius
      ))
    }
    return new THREE.CatmullRomCurve3(points)
  }, [startAngle, endAngle, radius])

  return (
    <mesh>
      <tubeGeometry args={[curve, 32, 0.015, 8, false]} />
      <meshBasicMaterial color="#D4A63B" transparent opacity={0.4} />
    </mesh>
  )
}

// Main scene
function FlywheelScene() {
  const { viewport } = useThree()
  const groupRef = useRef<THREE.Group>(null)
  
  // Responsive scaling - ensure minimum visibility
  const baseScale = Math.min(viewport.width, viewport.height) * 0.09
  const scale = Math.max(baseScale, 0.55) // Ensure minimum scale
  const radius = 2.5 // Reduced radius for better fit
  
  // Step data with icons
  const steps = [
    { step: '1', title: 'Superior Outcomes', description: 'Medical protocols + integration', Icon: CheckCircle2, angle: 0 },
    { step: '2', title: 'Word of Mouth', description: 'Guests become advocates', Icon: TrendingUp, angle: Math.PI / 2 },
    { step: '3', title: 'Referral Network', description: 'Physicians recommend us', Icon: Brain, angle: Math.PI },
    { step: '4', title: 'Brand Premium', description: 'Premium pricing power', Icon: Award, angle: Math.PI * 1.5 },
  ]
  
  // Node positions - slightly elevated
  const nodePositions: Array<[number, number, number]> = useMemo(() => {
    return steps.map(s => [
      Math.cos(s.angle) * radius,
      0.2, // Slight Y offset
      Math.sin(s.angle) * radius
    ] as [number, number, number])
  }, [radius])
  
  // Mouse tracking for subtle rotation
  useFrame((state) => {
    if (!groupRef.current) return
    const targetRotationY = state.mouse.x * 0.15
    const targetRotationX = state.mouse.y * 0.08
    groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05
    groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05
  })

  return (
    <group ref={groupRef} scale={scale} position={[0, -0.3, 0]}>
      {/* Central hub */}
      <CentralHub />
      
      {/* Main glowing ring */}
      <GlowingRing radius={radius} />
      
      {/* Flowing particles */}
      <FlowingParticles count={200} radius={radius} />
      
      {/* Orbiting light trails */}
      <OrbitingLight radius={radius} speed={0.35} color="#D4A63B" yAmplitude={0.4} />
      <OrbitingLight radius={radius * 0.9} speed={-0.28} color="#D4724D" yAmplitude={0.25} />
      <OrbitingLight radius={radius * 1.1} speed={0.2} color="#D4A63B" yAmplitude={0.35} />
      
      {/* Connection arcs */}
      {steps.map((_, i) => (
        <ConnectionArc 
          key={i}
          startAngle={steps[i].angle + 0.4}
          endAngle={steps[(i + 1) % 4].angle - 0.4}
          radius={radius}
        />
      ))}
      
      {/* Step nodes */}
      {steps.map((step, index) => (
        <StepNode
          key={step.step}
          position={nodePositions[index]}
          step={step.step}
          title={step.title}
          description={step.description}
          Icon={step.Icon}
          delay={index * 0.8}
        />
      ))}
      
      {/* Ambient sparkles */}
      <Sparkles
        count={80}
        scale={12}
        size={1.5}
        speed={0.15}
        color="#D4A63B"
        opacity={0.25}
      />
    </group>
  )
}

// Loading fallback
function LoadingFallback() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#D4A63B" wireframe />
    </mesh>
  )
}

// Main exported component
export default function FlywheelWebGL() {
  return (
    <div className="w-full h-[700px] md:h-[800px] relative" style={{ overflow: 'visible' }}>
      <Canvas
        dpr={[1, 2]}
        style={{ 
          background: 'transparent',
          overflow: 'visible',
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={55} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={1} color="#FFFFFF" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#D4A63B" distance={15} />
        <pointLight position={[0, 4, 0]} intensity={0.8} color="#D4724D" distance={12} />
        <pointLight position={[-5, 2, -5]} intensity={0.5} color="#1F483A" distance={10} />
        
        <Suspense fallback={<LoadingFallback />}>
          <FlywheelScene />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      
      {/* Gradient overlays for seamless blending */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-primary-900 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-900 to-transparent pointer-events-none z-10" />
    </div>
  )
}
