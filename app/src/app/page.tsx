import Banner1 from "@/components/banner1";
import Header from "../components/universal/header";
import Hero1 from "@/components/hero1";
import Hero2 from "@/components/hero2";
import ProdCard from "@/components/universal/productgrid";
import Banner2 from "@/components/banner2";
import Blog from "@/components/blog";
import Footer from "@/components/universal/footer";
import Ribbon from "@/components/universal/ribbon";
import Login from "@/components/universal/login";
import UserContextProvider from "@/context/userContextProvider";
import FavContextProvider from "@/context/favContextProvider";
import ProductGrid from "@/components/universal/productgrid";


export default function Home() {
  return (
  <div>

    <UserContextProvider>
    <FavContextProvider>


    <Header>
      <Ribbon></Ribbon>
    </Header>
    <Login/>
    <Hero1 />
    <Hero2 />
    <ProductGrid />    
    <Banner1 />
    <Banner2 />
    <Blog />
    <Footer />
    {/* </loginContextProvider> */}
    </FavContextProvider>
    </UserContextProvider>
  </div>
  );
}
