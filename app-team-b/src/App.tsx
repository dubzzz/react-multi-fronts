import React from "react";

const App = (props: { history: string[] }) => {
  return (
    <div>
      <h2>Welcome to the App of Team B</h2>
      <ul>
        Got the following history:
        {props.history.map(v => (
          <li>{v}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
