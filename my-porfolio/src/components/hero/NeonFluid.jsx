import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const NeonFluid = () => {
  const groupRef = useRef();
  const spheres = [];

  for (let i = 0; i < 25; i++) {
    const position = [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 10,
    ];
    const scale = Math.random() * 0.3 + 0.2;
    const color = new THREE.Color(
      `hsl(${Math.random() * 360}, 100%, 60%)`
    );
    spheres.push({ position, scale, color });
  }

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;

      groupRef.current.children.forEach((sphere, i) => {
        sphere.position.y += Math.sin(clock.getElapsedTime() + i) * 0.005;
        sphere.position.x += Math.cos(clock.getElapsedTime() + i) * 0.005;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {spheres.map((s, idx) => (
        <Sphere key={idx} args={[s.scale, 32, 32]} position={s.position}>
          <meshStandardMaterial
            color={s.color}
            emissive={s.color}
            emissiveIntensity={0.8}
            metalness={0.2}
            roughness={0.1}
          />
        </Sphere>
      ))}
    </group>
  );
};

export default NeonFluid;
