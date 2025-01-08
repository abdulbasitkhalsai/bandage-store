import Footer from "@/components/universal/footer";
import Header from "@/components/universal/header";
import { ReactNode } from "react";

export default function StoreLayout({children} : {children : ReactNode;}) {
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}
