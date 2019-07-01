# Proof-Of-Concept: React app spread accross multiple apps (separate releases)

**1- Setup initial apps**

```sh
create-react-app app-main --typescript
create-react-app app-team-a --typescript
create-react-app app-team-b --typescript
```

**2- Import team app from main app**

In order to do so, we are just relying on pure JavaScript code and disabling some checks done by WebPack and TypeScript:

```jsx
// import the module corresponding to the app of Team A
const AppTeamA = React.lazy(() =>
  //@ts-ignore
  import(/* webPackIgnore: true */ "http://localhost:10001/App.js")
);

// use it into our main app
render() {
    // ...
    return <React.Suspense fallback={<div>Loading...</div>}>
        <AppTeamA />
    </React.Suspense>;
}
```
