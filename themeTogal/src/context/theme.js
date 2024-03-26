// this method is use in prduction grad projects so it's very good syntax:

import { createContext, useContext } from "react";
export const ThemeContext = createContext({
  themeMode: "dark",
  darkTheme: () => {},
  lightTheme: () => {},
});

// this is also a method to direct pass a provider it's work same. kya kar rha hain variable hi to pass kar rha hain.

export const ThemeProvider = ThemeContext.Provider;

// We make custom hook also. and many time people make this hooks.
/* it also return a useContext is a very good coding syntax 
because in this syntax we not import may file in ohter files where we use this */
export default function useTheme() {
  return useContext(ThemeContext);
}

/* mujhe ager koi value chahiye to main useTheme ka use kar ke 
vlaues ko extract kar sakta hu. */
