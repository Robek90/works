import React from 'react';
import { useEffect, useRef } from 'react';

const GalaxyCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Пример: рисуем звезду в центре
    ctx.beginPath();
    ctx.arc(100, 100, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();

    return () => {
      // Очистка при удалении компонента
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return <canvas ref={canvasRef} width={400} height={400} />;
};

export default GalaxyCanvas;