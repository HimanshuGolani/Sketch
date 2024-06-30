import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppFieldProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [currentUserId, setCurrentUserId] = useState("");
  const [role, setRole] = useState("");

  return (
    <AppContext.Provider
      value={{
        auth,
        setAuth,
        currentUserId,
        setCurrentUserId,
        role,
        setRole,
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
