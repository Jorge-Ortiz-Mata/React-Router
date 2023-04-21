import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RouteLayout from './pages/RouteLayout';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout /> ,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> }
    ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
