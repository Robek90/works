// src/components/Blackhole.js
import React, { useRef, useEffect, useState } from 'react';
import { Stage, Layer, Image, Ring, Shape } from 'react-konva';
import useImage from 'use-image';
import blackholeImg from '../../public/image/blackhole.png';

const Blackhole = () => {
    const [blackhole] = useImage(blackholeImg);

    if (!blackhole) {
        return <></>;
    }

    return (
        <>
            <Layer>
                <Image
                    x={window.innerWidth / 2 - 45}
                    y={window.innerHeight / 2 - 20}
                    image={blackhole}
                    width={90}
                    height={40}
                    draggable
                    filters={[Konva.Filters.Blur]}
                    blurRadius={100}
                />

            </Layer>
        </>
    );
};

export default Blackhole;