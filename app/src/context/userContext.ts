import { createContext } from "react";

const UserContext = createContext<{
    User: string | null;
    SetUser: (user: string | null) => void;
  }>({
    User: null,
    SetUser: () => {}, })

export default UserContext;