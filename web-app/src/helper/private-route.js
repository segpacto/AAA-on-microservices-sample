import { useAuthInfo } from '../components/auth-context-provider';

export const PrivateRoute = ({ children }) => {
  const { keycloak } = useAuthInfo();

  const authenticated = keycloak && keycloak.authenticated;

  return authenticated ? children : null;
};
