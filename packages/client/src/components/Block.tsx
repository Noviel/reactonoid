import React from "react";

interface Props {
  pos: [number, number];
}

const Block: React.FC<Props> = ({ pos, children }) => {
  return <div style={{ backgroundColor: "brown" }}>{pos[0]},{pos[1]}</div>;
};

export { Block };
