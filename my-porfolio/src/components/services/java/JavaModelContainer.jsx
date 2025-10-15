import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { JavaModel } from "./JavaModel"
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei"


const JavaModelContainer =() => {
    return ( 
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="night" intensity={5}>
                <JavaModel />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate/>
                <PerspectiveCamera position={[-1,0,2]} zoom={0.8} makeDefault/>
            </Suspense>
        </Canvas>
    )
}

export default JavaModelContainer