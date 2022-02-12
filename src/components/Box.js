import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
function Box(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  useFrame((state, delta) => {
    ref.current.position.y =
      props.position[0] + Math.sin(state.clock.elapsedTime) * 1;
    ref.current.position.x = props.position[1];
    ref.current.position.z = props.position[2];
    ref.current.rotation.x =
      ref.current.rotation.y =
      ref.current.rotation.z +=
        delta;
  });
  return (
    <mesh
      ref={ref}
      scale={hovered ? 2 : 1}
      onPointerOver={(event) => {
        document.getElementsByClassName(
          "App"
        )[0].style.cursor = `url("https://i.ibb.co/${props.img}.png"), auto`;
        hover(true);
        console.log(document.getElementsByClassName("App")[0].style.cursor);
      }}
      onPointerOut={(event) => {
        document.getElementsByClassName("App")[0].style.cursor = "auto";
        hover(false);
      }}
      style={{ cursor: "pointer" }}
    >
      <boxGeometry />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}

export default Box;
