import React, { createContext, useState } from 'react'

const DarkModeContext = createContext();

function DarkModeProvider(props) {
    const [darkMode, setdarkMode] = useState("DARK");
    const toggleDarkMode = () => {
        darkMode === "DARK" ? setdarkMode("LIGHT") : setdarkMode("DARK");
        // console.log(darkMode);
    }
  return (
    <div>
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    </div>
  )
}

export {DarkModeContext, DarkModeProvider};