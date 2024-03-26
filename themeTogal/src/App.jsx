import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import { useEffect } from "react";
import Card from "./components/card";
import TogalBtn from "./components/TogalBtn";

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  // actual theme changing code it is posible using js

  useEffect(() => {
    let element = document.querySelector("html");
    element.classList.remove("dark", "light");
    element.classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <TogalBtn/>
               {/* Theme Button component*/}
            
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card/>
              {/* Card component*/}</div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
