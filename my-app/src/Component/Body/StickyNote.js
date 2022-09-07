import React, { useState, useEffect } from "react";
import { Group, Rect } from "react-konva";
import { EditableText } from "./EditableText";

export function StickyNote({
  colour,
  text,
  x,
  y,
  width,
  height,
  onClick,
  onTextResize,
  onTextChange,
  selected,
  onTextClick
}) {
  const [textX, setTextX] = useState(x);
  const [textY, setTextY] = useState(y);
  const [isEditing, setIsEditing] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);

  useEffect(() => {
    if (!selected && isEditing) {
      setIsEditing(false);
    } else if (!selected && isTransforming) {
      setIsTransforming(false);
    }
  }, [selected, isEditing, isTransforming]);

  function toggleEdit(e) {
    if(e.type !== "keydown") {
      const absPos = e.target.getAbsolutePosition() ? e.target.getAbsolutePosition() : undefined;
      if(absPos) {
        setTextX(absPos.x);
        setTextY(absPos.y);
      }
      setIsEditing(!isEditing);
      onTextClick(!isEditing);
    }
  }

  function toggleTransforming() {
    setIsTransforming(!isTransforming);
    onTextClick(!isTransforming);
  }

  return (
    <Group x={textX} y={textY}>
      <Rect
        x={20}
        y={20}
        width={width}
        height={height + 40}
        fill={colour}
        shadowColor="black"
        shadowOffsetY={10}
        shadowOffsetX={0}
        shadowBlur={30}
        shadowOpacity={0.6}
        perfectDrawEnabled={false}
      />
      <Rect
        x={0}
        y={0}
        width={width + 40}
        height={height + 60}
        fill={colour}
        perfectDrawEnabled={false}
        onClick={onClick}
        onTap={onClick}
      />
      <EditableText
        text={text}
        width={width}
        height={height}
        onResize={onTextResize}
        isEditing={isEditing}
        isTransforming={isTransforming}
        onToggleEdit={(e) => toggleEdit(e)}
        onToggleTransform={toggleTransforming}
        onChange={onTextChange}
      />
    </Group>
  );
}
