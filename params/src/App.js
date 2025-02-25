import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Layout from './components/Layout';
import About from './components/About';
import User from './components/User';  // New Component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [      
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },  
      { path: "about", element: <About /> },
      { path: "user/:id", element: <User /> }  // New Dynamic Route
    ]
  }
]);

function App() {
  return (
    <div>
      <h1>Hi! This is Params</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
