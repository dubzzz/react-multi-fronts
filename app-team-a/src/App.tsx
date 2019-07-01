import React from "react";
import * as fc from "fast-check";

const App: React.FC = () => {
  return (
    <p>
      <h2>Welcome to the App of Team A</h2>
      <p>{fc.sample(fc.lorem(10, true))[0]}</p>
    </p>
  );
};

export default App;
