import React, { useState } from "react";

const AppTeamA = React.lazy(() =>
  //@ts-ignore
  import(/* webpackIgnore: true */ "http://localhost:10001/bundle.js")
);
const AppTeamB = React.lazy(() =>
  //@ts-ignore
  import(/* webpackIgnore: true */ "http://localhost:10002/bundle.js")
);

const App: React.FC = () => {
  const [page, setPage] = useState<"home" | "app-a" | "app-b">("home");
  const [history, setHistory] = useState([] as string[]);

  const CurrentApp =
    page === "home" ? (
      <h2>Welcome to the home page</h2>
    ) : page === "app-a" ? (
      <React.Suspense fallback={<div>Loading App A...</div>}>
        <AppTeamA />
      </React.Suspense>
    ) : (
      <React.Suspense fallback={<div>Loading App B...</div>}>
        <AppTeamB history={history} />
      </React.Suspense>
    );
  return (
    <div>
      <div className="Menu">
        <button
          onClick={() => {
            setPage("home");
            setHistory([...history, "Go to home"]);
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            setPage("app-a");
            setHistory([...history, "Go to App A"]);
          }}
        >
          App A
        </button>
        <button
          onClick={() => {
            setPage("app-b");
            setHistory([...history, "Go to App B"]);
          }}
        >
          App B
        </button>
      </div>
      <div className="App">{CurrentApp}</div>
    </div>
  );
};

export default App;
