import { createContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeContextProvider =(props)=>{
    const [theme,setTheme]=useState(true)

    const themeToggle = ()=>{
        setTheme(!theme)
    }
    return(
        <ThemeContext.Provider value={{theme,themeToggle}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContext