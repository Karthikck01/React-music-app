import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { DarkModeImg, LightModeImg } from "../../assets/icon";
import { AppContext } from "../../Context/GlobalContext";
const ThemeButton = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);
  return (
    <Button
      variant={darkMode ? "dark" : "light"}
      className="rounded-pill d-flex justify-content-center align-items-center gap-2"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <>
          Dark <DarkModeImg />
        </>
      ) : (
        <>
          Light <LightModeImg />
        </>
      )}
    </Button>
  );
};

export default ThemeButton;
