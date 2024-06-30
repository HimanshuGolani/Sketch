import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppFieldProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [currentUserId, setCurrentUserId] = useState("");

  return (
    <AppContext.Provider
      value={{
        auth,
        setAuth,
        currentUserId,
        setCurrentUserId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppContext);
};

export default AppFieldProvider;
