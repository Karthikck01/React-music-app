import React, { createContext, useState } from 'react'

export const AppContext = createContext();

const GlobalContext = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)

  return (
    <AppContext.Provider value={{darkMode, setDarkMode}}>
        {children}
    </AppContext.Provider>
  )
}

export default GlobalContext