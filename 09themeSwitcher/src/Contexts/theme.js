import { createContext,useContext } from "react";
import { ssrDynamicImportKey } from "vite/module-runner";

export const themeContext = createContext({
    themeMode:"light"
    darkTheme:()=>{}
    lightTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider
export default function useTheme(){
    return useContext(themeContext)
}