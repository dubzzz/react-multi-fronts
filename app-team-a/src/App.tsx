import React from "react";
import * as fc from "fast-check";

const App: React.FC = () => {
  return (
    <div>
      <h2>Welcome to the App of Team A</h2>
      <p>{fc.sample(fc.lorem(10, true), { seed: 42 })[0]}</p>
    </div>
  );
};

export default App;
