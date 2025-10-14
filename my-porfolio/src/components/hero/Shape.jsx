import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 32, 32]} scale={2.4}>
        <MeshDistortMaterial
          color="#DB8B98"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} position={[5, 5, 5]} />
    </>
  );
};

export default Shape;
