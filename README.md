# React Router.

## Install the pakage

```bash
$ yarn add react-router-dom
```

## Getting started

This is a simple example of how we can have multiple pages using different routes.

```javascript
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const router = createBrowserRouter([
  { // Each object represents a route
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
```
