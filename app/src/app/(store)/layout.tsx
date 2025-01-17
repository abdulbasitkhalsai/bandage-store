import Footer from "@/components/universal/footer";
import Header from "@/components/universal/header";
import UserContextProvider from "@/context/userContextProvider";
import { ReactNode } from "react";

const StoreLayout = ({children} : {children : ReactNode;}) => {
    return (
        <>
        <UserContextProvider>
        <Header/>
        {children}
        <Footer/>
        </UserContextProvider>
        </>
    )
}

export default StoreLayout;