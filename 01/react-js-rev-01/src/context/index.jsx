// creating context

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

// global state receive component as children

// each component is children

 function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");
  return( <GlobalContext.Provider value={{theme,setTheme}}>{children}</GlobalContext.Provider>);
}

export default GlobalState;