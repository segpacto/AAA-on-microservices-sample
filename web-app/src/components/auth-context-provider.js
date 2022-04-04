import React, { useContext } from "react";

import { useKeycloak } from "../hooks/keycloak";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({children}) => {
    const [keycloak, userInfo] = useKeycloak();

    return (
        <AuthContext.Provider value={{ keycloak, userInfo }}>
          {children}
        </AuthContext.Provider>
      )
}

/**
 * Documentation indicates that should be implemented on the children
 * On this case was implemented as a more encapsulated way to obtain
 * context to reduce the code by importing the useContext and the AuthContext
 */
export const useAuthInfo = () => {
  return useContext(AuthContext);
}
