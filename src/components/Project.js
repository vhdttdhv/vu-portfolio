import React from "react";
import {
  Billboard,
  Text,
  PresentationControls,
  Plane,
} from "@react-three/drei";
function Project() {
  return (
    <PresentationControls
      global={false} // Spin globally or by dragging the model
      cursor={false} // Whether to toggle cursor style on drag
      snap={false} // Snap-back to center (can also be a spring config)
      speed={1} // Speed factor
      zoom={1} // Zoom factor when half the polar-max is reached
      rotation={[0, 0, 0]} // Default rotation
      polar={[0, Math.PI / 2]} // Vertical limits
      azimuth={[-Infinity, Infinity]} // Horizontal limits
      config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
    >
      <Billboard
        follow="true"
        lockX="false"
        lockY="false"
        lockZ="false"
        position={[-4, -2, 0]}
      >
        <Plane args={[3, 2]} material-color="red" />
      </Billboard>
      <Billboard
        follow="true"
        lockX="false"
        lockY="false"
        lockZ="false"
        position={[-4, 2, 0]}
      >
        <Plane args={[3, 2]} material-color="orange" />
      </Billboard>
      <Billboard
        follow="true"
        lockX="false"
        lockY="false"
        lockZ="false"
        position={[0, 0, 0]}
      >
        <Plane args={[3, 2]} material-color="green" />
      </Billboard>
    </PresentationControls>
  );
}

export default Project;
