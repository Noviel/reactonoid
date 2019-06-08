import React from "react";

import { GameField } from "./GameField";

interface Props {}

const App: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <GameField width={6} height={10} />
      {children}
    </div>
  );
};

export { App };
