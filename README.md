# React Router.

This file provides information about React Router.

## Index

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

## Older solutions.

You can find different solutions on how to declare the routes.

```javascript
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions)

function App() {
  return <RouterProvider router={router} />
}

export default App;
```

## Add links and navigate

We could navigate between pages with the Route component.

```javascript
import { Link } from 'react-router-dom';

const Header = () => {

  return(
    <nav className="flex items-center justify-between px-5 py-3 border">
      <h3 className="font-bold text-xl">My App</h3>
      <div>
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
      </div>
    </nav>
  )
}

export default Header;
```

## Adding Layouts (layouts for all our pages).

We define our Layout (RouteLayout for example) and set all the components will be rendered with the same format.

* App.jsx

```javascript
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RouteLayout from './pages/RouteLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout /> ,
    children: [
      { path: '/', element: <Home />},
      { path: '/about', element: <About />}
    ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
```

* src/pages/RouteLayout.jsx

```javascript
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const RouteLayout = () => {

  return(
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default RouteLayout;
```

## Error Page.

We can add a general error page when a URL is been typped incorrectly.

* App.jsx

```javascript
const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout /> ,
    errorElement: <ErrorPage />,
    children: ...
  },
])
```

* src/pages/ErrorPage.jsx

```javascript
import Header from "../components/Header/Header";

const ErrorPage = () => {

  return(
    <>
      <Header />
      <h2>URL not valid</h2>
      <p>You type an invalid URL</p>
    </>
  )
}

export default ErrorPage;
```

## Highligth current path.

We can add an extra class depending on the path we are, in this case to our links.

```javascript
import { NavLink } from 'react-router-dom';

const Header = () => {

  return(
    <nav className="flex items-center justify-between px-5 py-3 border">
      <h3 className="font-bold text-xl">My App</h3>
      <ul className="flex items-center justify-between gap-5">
        <li className="text-sm font-semibold underline">
          <NavLink
            to="/"
            className={({isActive}) => (
              isActive
              ? 'text-red-800'
              : 'text-gray-600'
            )}
            end // This ensures that this link will be active if ends with '/'
          >
            Home
          </NavLink>
        </li>
        <li className="text-sm font-semibold underline">
          <NavLink
            to="/about"
            className={({isActive}) => (
              isActive
              ? 'text-red-800'
              : 'text-gray-600'
            )}
            end
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
```

## Navigate prgramatically.

We can navigate to another page when an action has been executed. Similar to React Native.

* Home.jsx

```javascript
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about')
  }

  return(
    <>
      <h1 className="text-2xl font-bold">Home Page</h1>
      <button className="border bg-gray-300 text-sm font-bold p-2 rounded" onClick={handleClick}>Navigate</button>
    </>
  )
}

export default Home;
```
