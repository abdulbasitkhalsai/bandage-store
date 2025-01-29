import Banner1 from "@/components/banner1";
import Hero1 from "@/components/hero1";
import Hero2 from "@/components/hero2";
import Banner2 from "@/components/banner2";
import Blog from "@/components/blog";
import Footer from "@/components/universal/footer";
import ProductGrid from "@/components/universal/productgrid";
import Header from "@/components/universal/header";


export default function Home() {
  return (
  <div>

    <Header>
      {/* <Ribbon></Ribbon> */}
    </Header>
    <Hero1 />
    <Hero2 />
    <ProductGrid />    
    <Banner1 />
    <Banner2 />
    <Blog />
    <Footer />
  </div>
  );
}
