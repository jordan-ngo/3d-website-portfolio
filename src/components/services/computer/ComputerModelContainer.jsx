import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {ComputerModel} from "./ComputerModel";
import { OrbitControls, Stage } from "@react-three/drei";

const ComputerModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback="loading...">
          <Stage environment="city">
            <ComputerModel />
          </Stage>
            <OrbitControls enableZoom={false}/>
        </Suspense>
    </Canvas>
  );
};

export default ComputerModelContainer