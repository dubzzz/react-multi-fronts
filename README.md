# Proof-Of-Concept: React app spread accross multiple apps (separate releases)

## In a nutshell

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
  import(/* webpackIgnore: true */ "http://localhost:10001/bundle.js")
);

// use it into our main app
render() {
    // ...
    return <React.Suspense fallback={<div>Loading...</div>}>
        <AppTeamA />
    </React.Suspense>;
}
```

**3- Bundle team A and team B work**

Check the following files:

- rollup.config.js
- tsconfig.lib.json

## Run it

In a first terminal:

```
cd app-main
yarn && yarn start
```

In a second terminal:

```
cd app-team-a
yarn && yarn build:dist && yarn serve
```

In a third terminal:

```
cd app-team-b
yarn && yarn build:dist && yarn serve
```
