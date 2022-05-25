import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notifications: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentMode, setCurrentMode] = useState("Light");
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (mode) => {
    setCurrentMode(mode.target.value);

    localStorage.setItem("themeMode", mode.target.value);
  };
  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const removeClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: false });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        setMode,
        setColor,
        currentColor,
        currentMode,
        setCurrentMode,
        setCurrentColor,
        themeSettings,
        removeClick,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
