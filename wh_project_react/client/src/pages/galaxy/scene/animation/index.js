import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
 
function Animation(props) {
  const ref = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    ref.current.position.x = Math.random() * 2;
    ref.current.position.y = Math.random() * 2;
    ref.current.position.z = Math.random() * 2;
    ref.current.scale.setScalar(Math.random() * 0.05);
    ref.current.rotation.y -= 0.001; 
    ref.current.rotation.x += 0.0001;
    ref.current.rotation.z += 0.0001;
  });

  return (
    <>
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <tetrahedronGeometry args={[1]} />
        <meshStandardMaterial
          flatShading={true}
          wireframe={props.wireframe}
          color={hovered ? "hotpink" : "orange"}
        />
      </mesh>
    </>
  );
}
 
export default Animation;