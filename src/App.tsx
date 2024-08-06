import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import RootLayout from './_components/RootLayout';
import About from './_pages/About';
import Home from './_pages/Home';

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
