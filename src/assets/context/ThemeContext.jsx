import { createContext, useState } from "react";

//esto va a permitir que lo llames desde otro archivo
const ThemeContext = createContext();

// esto va a permitir dar wrapper al contexto y
// definir que variables vas a pasar
const initialIsThemeLight = true;
const ThemeProvider = ({ children }) => {

    const [isThemeLight, setIsThemeLight] = useState(initialIsThemeLight)
    const handleTheme = (e) => {
        if(e.target.id == "light-context"){
            setIsThemeLight(true)
        }
        if(e.target.id == "dark-context"){
            setIsThemeLight(false)
        }
    }
    const value = {isThemeLight, handleTheme};
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export {ThemeProvider};
export default ThemeContext;