import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
 
function Animation(props) {
  const ref = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    // ref.current.position.x = Math.random() * 2;
    // ref.current.position.y = Math.random() * 2;
    // ref.current.position.z = Math.random() * 2;
    // ref.current.scale.setScalar(Math.random() * 0.05);
    ref.current.rotation.y -= 0.01; 
    ref.current.rotation.x += 0.01;
    ref.current.rotation.z += 0.01;
  });

  return (
    <group>
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 20 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <tetrahedronGeometry args={props.data.random}/>
        <meshStandardMaterial
          flatShading={true}
          wireframe={props.wireframe}
          color={hovered ? "hotpink" : "orange"}
        />
      </mesh>
    </group>
  );
}
 
export default Animation;

