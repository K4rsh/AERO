import { useRef, FC, useEffect, useState } from 'react';

import Wave from './Wave';
import { CanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';

const Canvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width } = useResponsiveSize();
  const [context, setContext] = useState<CanvasRenderingContext2D | undefined>();

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext('2d');
    if (ctx) setContext(ctx);
  }, []);

  return (
    <CanvasContext.Provider value={{ context }}>
      <div className="w-full overflow-hidden">
        <canvas
          id="canvas"
          ref={canvasRef}
          width={width}
          height={220}
          className="block mx-auto" // Center the canvas
        ></canvas>
        <Wave />
      </div>
    </CanvasContext.Provider>
  );
};

export default Canvas;
