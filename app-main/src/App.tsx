import React from "react";

const AppTeamA = React.lazy(() =>
  //@ts-ignore
  import(/* webpackIgnore: true */ "http://localhost:10001/bundle.js")
);
const AppTeamB = React.lazy(() =>
  //@ts-ignore
  import(/* webpackIgnore: true */ "http://localhost:10002/bundle.js")
);

const App: React.FC = () => {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading App A...</div>}>
        <AppTeamA />
      </React.Suspense>
      <React.Suspense fallback={<div>Loading App B...</div>}>
        <AppTeamB history={["user.a", "user.b"]} />
      </React.Suspense>
    </div>
  );
};

export default App;
