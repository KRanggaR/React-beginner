import React, { createContext, useReducer, useContext } from "react";

// Provide a default value with dummy functions
const ThemeContext = createContext();

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "toggle":
      return { isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
}

const initialState = { isDarkMode: false };

export const ThemeProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode: state.isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
