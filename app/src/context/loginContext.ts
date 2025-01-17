import { createContext } from "react";

const LoginContext = createContext<
    {
        open: boolean,
        onClose: React.Dispatch<React.SetStateAction<boolean>>    
    } | null
    >(null)

export default LoginContext;