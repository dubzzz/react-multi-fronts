import React from "react";

const AppTeamA = React.lazy(() =>
  //@ts-ignore
  import(/* webpackIgnore: true */ "http://localhost:10001/App.js")
);

const App: React.FC = () => {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading App A...</div>}>
        <AppTeamA />
      </React.Suspense>
    </div>
  );
};

export default App;
