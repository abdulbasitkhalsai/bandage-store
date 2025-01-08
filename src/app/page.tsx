import Banner1 from "@/components/banner1";
import Header from "../components/universal/header";
import Hero1 from "@/components/hero1";
import Hero2 from "@/components/hero2";
import ProdCard from "@/components/prodcard";
import Banner2 from "@/components/banner2";
import Blog from "@/components/blog";
import Footer from "@/components/universal/footer";
import Ribbon from "@/components/universal/ribbon";


export default function Home() {
  return (
  <div>
    <Header>
      <Ribbon></Ribbon>
    </Header>
    <Hero1 />
    <Hero2 />
    <ProdCard />
    <Banner1 />
    <Banner2 />
    <Blog />
    <Footer />
  </div>
  );
}
