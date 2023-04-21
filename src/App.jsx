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
