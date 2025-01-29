
import { createContext } from "react";

// const UserContext = createContext<{
//     User: string | null;
//     SetUser: (user: string | null) => void;
//   }>({
//     User: null,
//     SetUser: () => {}, })

// export default UserContext;

interface UserContextType {
  User: string | null;
  SetUser: (user: string | null) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
}

const UserContext = createContext<UserContextType>({
  User: null,
  SetUser: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export default UserContext;
