import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ThemeToggle />
        {/* <Content /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;