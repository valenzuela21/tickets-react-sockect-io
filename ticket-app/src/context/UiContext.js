import React, { createContext, useState } from 'react'

export const UiContext = createContext();

export const UiProvider = ({children}) =>{
    const [hideMenu, setHideMenu] = useState(false)
    const showMenu = () => {
        setHideMenu(false)
    }
    const disableMenu = () => {
        setHideMenu(true)
    }
    return(
        <UiContext.Provider value={{
            showMenu,
            disableMenu,
            hideMenu,
        }}>
            {children}
        </UiContext.Provider>
    )
}
