import React, { useState } from 'react';
import './Body.css'
import Sidebar from '../Sidebar/Sidebar';
import { Stage, Layer, Star } from 'react-konva';
import { StickyNote } from "./StickyNote";

function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

const App = () => {
  const [stars, setStars] = React.useState(INITIAL_STATE);
  const [text, setText] = useState("Click to resize. Double click to edit.");
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [textX] = useState(100);
  const [textY] = useState(100);
  const [selected, setSelected] = useState(false);

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };

  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };

  return (
    <div>
      <div className='body'>
        <Sidebar selected={selected}/>
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onClick={(e) => {
            if (e.currentTarget._id === e.target._id) {
              setSelected(false);
            }
          }}
        >
          <Layer>
          <StickyNote
            x={textX}
            y={textY}
            text={text}
            // colour="#FFDAE1"
            onTextChange={(value) => setText(value)}
            width={width}
            height={height}
            selected={selected}
            onTextResize={(newWidth, newHeight) => {
              setWidth(newWidth);
              setHeight(newHeight);
            }}
            onClick={() => {
              setSelected(!selected);
            }}
            onTextClick={(newSelected) => {
              setSelected(newSelected);
            }}
          />
            {stars.map((star) => (
              <Star
                key={star.id}
                id={star.id}
                x={star.x}
                y={star.y}
                numPoints={5}
                innerRadius={20}
                outerRadius={40}
                fill="#89b717"
                opacity={0.8}
                draggable
                rotation={star.rotation}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                shadowOffsetX={star.isDragging ? 10 : 5}
                shadowOffsetY={star.isDragging ? 10 : 5}
                scaleX={star.isDragging ? 1.2 : 1}
                scaleY={star.isDragging ? 1.2 : 1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              />
            ))}
          </Layer>
        </Stage>
      </div>
  </div>
  );
};

export default App;
