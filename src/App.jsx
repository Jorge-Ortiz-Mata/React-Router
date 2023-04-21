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
