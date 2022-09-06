import React, { useState } from 'react';
import './Body.css'
import Sidebar from '../Sidebar/Sidebar';
import { Stage, Layer, Star, Text } from 'react-konva';
// import { StickyNote } from "./StickyNote";

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
  const [width] = useState(200);
  const [textX, setTextX] = useState(100);
  const [textY, setTextY] = useState(100);
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

   const handleTextDblClick = e => {
    const absPos = e.target.getAbsolutePosition();
    setSelected(true);
    setTextX(absPos.x);
    setTextY(absPos.y);
  };

  const handleTextEdit = e => {
    setText(e.target.value);
  };

  const handleTextareaKeyDown = e => {
    if (e.keyCode === 13) {
      setSelected(false);    
    }
  };

  return (
    <div>
      <div className='body' onMouseDown={() => setSelected(false)}>
        <Sidebar/>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text
              fontSize={20}
              align={"left"}
              fontStyle={20}
              draggable
              text={text}
              x={textX}
              y={textY}
              wrap="word"
              width={width}
              onDblClick={e => handleTextDblClick(e)}
              perfectDrawEnabled={false}
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

      <textarea
        value={text}
        style={{
          display: selected ? "block" : "none",
          position: "absolute",
          top: textY + "px",
          left: textX + "px"
        }}
        onChange={e => handleTextEdit(e)}
        onKeyDown={e => handleTextareaKeyDown(e)}
    />
  </div>
  );
};

export default App;
