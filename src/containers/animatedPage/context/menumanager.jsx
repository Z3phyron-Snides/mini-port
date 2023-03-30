import { useState } from "react";
import { createContext } from "react";

export const MenuContext = createContext({
    open: false,
    setOpen: () => {}
})

export const MenuManager = ({children}) => {
    const [open, setOpen] = useState(false)

    return (
      <MenuContext.Provider value={{ open, setOpen }}>
        {children}
      </MenuContext.Provider>
    );
}

export default MenuManager 