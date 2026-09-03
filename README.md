# CustomHook - React useFetch Demo

A small React app built with Vite to show how a custom `useFetch` hook works. It loads a list of users from a public API and displays them in a simple directory.

## What's inside

- `src/hooks/useFetch.js` - custom hook that wraps `fetch`
- `src/components/UserList.js` - UI that uses the hook
- `src/components/UserList.css` - styling for the directory cards

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- The app fetches from `https://jsonplaceholder.typicode.com/users`.
- It shows loading, error, and data states.
- This repo is hosted on GitHub Pages using the `master` branch.
