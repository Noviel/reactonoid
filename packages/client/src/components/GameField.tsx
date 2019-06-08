import React, { useState } from "react";

import { Block } from "./Block";

interface Props {
  width: number;
  height: number;
}

interface BlocksState {
  list: {
    pos: [number, number];
    id: string;
  }[];
}

const GameField: React.FC<Props> = ({ width, height, children }) => {
  const [blocks, setBlocks] = useState<BlocksState>({
    list: [
      {
        pos: [0, 0],
        id: "123"
      }
    ]
  });

  return (
    <div style={{ backgroundColor: "red" }}>
      {blocks.list.map(block => (
        <Block key={block.id} pos={block.pos} />
      ))}
    </div>
  );
};

export { GameField };
