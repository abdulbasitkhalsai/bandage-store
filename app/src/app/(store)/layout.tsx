import Footer from "@/components/universal/footer";
import Header from "@/components/universal/header";
import { ReactNode } from "react";

const StoreLayout = ({children} : {children : ReactNode;}) => {
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}

export default StoreLayout;