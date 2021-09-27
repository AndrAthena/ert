import React, { FC, useEffect, useState, useRef, ElementType } from 'react';
import { Stage, StageProps, Layer, Transformer } from 'react-konva';
import Konva from 'konva';

interface EditorCanvaProps {
  elements?: ElementType<any>[];
  stageProps?: StageProps;
  elementIsSelected?: boolean;
  refs?: any[];
}

const EditorCanva: FC<EditorCanvaProps> = ({ elements, stageProps, elementIsSelected, refs }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const transform = useRef<Konva.Transformer | null>(null);

  useEffect(() => {
    if (containerRef) {
      const rect = containerRef.current?.getBoundingClientRect();
      rect && setWidth(rect.width);
      rect && setHeight(rect.height);
    }
    window.addEventListener('resize', () => {
      if (containerRef) {
        const rect = containerRef.current?.getBoundingClientRect();
        rect && setWidth(rect.width);
        rect && setHeight(rect.height);
      }
    });
  }, [containerRef]);

  useEffect(() => {
    if (elementIsSelected) {
      transform?.current?.nodes((refs || []) as any);
      transform?.current?.getLayer()?.batchDraw();
    }
    console.log(elementIsSelected, refs);
  }, [elementIsSelected, refs]);

  return (
    <div ref={containerRef} style={{ height: '100%' }} aria-label="canvas">
      <Stage width={width} height={height} {...stageProps}>
        <Layer>
          {(elements || []).map((element) => element)}
          {elementIsSelected && (
            <Transformer
              ref={transform}
              boundBoxFunc={(_, newBox) => newBox}
              enabledAnchors={['middle-left', 'middle-right']}
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default EditorCanva;
