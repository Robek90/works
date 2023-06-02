import { Canvas } from "@react-three/fiber";
import Galaxy from "./animation/index";
import { OrbitControls, Stats } from "@react-three/drei";
import "./style.css";
 
function Scene() {
  const randomVector = (r) => [r/2 - Math.random() * r, r/2 - Math.random() * r, r/2 - Math.random() * r]
  const randomEuler = () => [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
  const data = Array.from({ length: 1000 }, (r = 500) => ({ random: Math.random(), position: randomVector(r), rotation: randomEuler() }))

  return (
    <>
      <section className="scene">
        <Canvas>
          <pointLight position={[30, 30, 30]} />
          <ambientLight />
          {data.map(item=>{
            return <Galaxy position={item.position} data={data}/>
          })}
          <OrbitControls/>
        </Canvas>
      </section>
    </>
  );
}
 
export default Scene;
