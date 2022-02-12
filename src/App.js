import React, { Suspense, useState } from "react";
import "./styles/App.css";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sky,
  Stars,
  Text,
  Billboard,
  Plane,
} from "@react-three/drei";
import Ocean from "./components/Ocean";
import Text3D from "./components/Text3D";
import About from "./components/About";
import Project from "./components/Project";
import Box from "./components/Box";

export default function App() {
  const [isHome, setIsHome] = useState("main");
  return (
    <div className="App">
      <Canvas
        camera={{
          position: [-9.918, 11.685, 120.067],
          fov: 55,
          near: 1,
          far: 20000,
        }}
      >
        <pointLight position={[100, 100, 100]} />
        <pointLight position={[-100, -100, -100]} />
        <Suspense fallback={<Text>Loading...</Text>}>
          <Ocean />
          <Sky
            scale={1000}
            sunPosition={[500, 150, -500]}
            turbidity={isHome ? 0.5 : 0} // if not home page turn to moon
            rayleigh={isHome ? 0.5 : 0.0} // if not home page turn to moon
            color="black"
          />
          {isHome ? (
            <>
              <Text3D
                position={[-35, 15, 50]}
                children={`Hi, I am`}
                size="0.5"
              />
              <Text3D position={[-35, 4, 50]} children={`Trong Vu`} />
            </>
          ) : (
            <>
              <Stars
                radius={200} // Radius of the inner sphere (default=100)
                depth={50} // Depth of area where stars should fit (default=50)
                count={15000} // Amount of stars (default=5000)
                factor={4} // Size factor (default=4)
                saturation={0} // Saturation 0-1 (default=0)
                fade={true} // Faded dots (default=false)
              />
              <Project />
            </>
          )}

          {/* light for the boxes */}
          <pointLight color="white" intensity={0.5} position={[1, 4, 140]} />
          <Box position={[1, -24, 100]} color="#ff8175" img="Qr4TXqG/phonee" />
          <Box position={[1, -19, 100]} color="#80fe8c" img="pP5dVhb/phone" />
          <Box position={[1, -14, 100]} color="#8a73fe" img="9rMD6B1/github" />

          <OrbitControls />
        </Suspense>
      </Canvas>

      {!isHome ? (
        ""
      ) : (
        <div className="app-about">
          <div className="app-about-content">
            <About />
          </div>
        </div>
      )}

      <button
        className="app-button"
        onClick={() => {
          setIsHome(!isHome);
        }}
      >
        {isHome ? "View My Projects" : "Back To Home"}
      </button>
    </div>
  );
}
