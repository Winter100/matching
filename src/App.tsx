import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
