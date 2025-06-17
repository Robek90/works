import React from 'react';
import { Stage, Layer, Circle, Ring, Image } from 'react-konva';
// import useImage from 'use-image';
import img from '../../public/image/blackhole.png'

const Blackhole = () => {
    const [blackholeImg] = useImage("https://overclockers.ru/st/legacy/blog/371247/634309_O.jpg");
     return (
        <>
            <Layer>
                <Image
                    x={50}
                    y={50}
                    image={blackholeImg}
                    width={106}
                    height={118}
                />
                {/* <Circle 
                    x={window.innerWidth / 2} 
                    y={window.innerHeight / 2} 
                    radius={20} 
                    fill="black" 
                    stroke= 'yellow'
                    strokeWidth= "0.5"
                    filters={[Konva.Filters.Blur]}
                    draggable
                    blurRadius={100}
                /> */}
            </Layer>
            {/* <Layer>
                <Ring
                    x={window.innerWidth / 2} 
                    y={window.innerHeight / 2} 
                    innerRadius={21}
                    outerRadius={23}
                    fill="yellow"
                />
            </Layer> */}
            {/* <Layer>
                <Arc
                    x={window.innerWidth / 2}  
                    y={window.innerHeight / 2} 
                    innerRadius={21}
                    outerRadius={24}
                    angle={40}
                    rotation={90}
                    fill="yellow"
                />
            </Layer> */}
        </>
    );
};

export default Blackhole;