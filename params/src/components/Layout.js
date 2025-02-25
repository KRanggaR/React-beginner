import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h2>Layout</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link> 
        <Link to="/login">Login</Link> 
        <Link to="/user/123">User 123</Link> {/* Example dynamic route */}
      </nav>
      <Outlet /> 
    </div>
  );
}

export default Layout;
