import { createContext, useState } from "react";

const ToggleMobileMenuContext = createContext();

const ToggleMobileMenuContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <ToggleMobileMenuContext.Provider value={{ show, setShow }}>
      {children}
    </ToggleMobileMenuContext.Provider>
  );
};

export const ToggleMobileMenu = ToggleMobileMenuContext;

export default ToggleMobileMenuContextProvider;
