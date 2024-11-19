import Image from "next/image";
import Navbar from './components/navbar/page';
import { CategorySection } from "./components/home/page";
import { DealsSection } from "./components/home2/page";
import { SectionThree } from "./components/home3/page";
import { Footer } from "./components/footer/page";
import { Region } from "./components/region/page";
import { RecommendedItems } from "./components/recitems/page";
import { Subs } from "./components/subcscribe/page";
import {Supplier} from "./components/supplier/page";
import {Services } from "./components/services/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <CategorySection />
      <DealsSection />
      <SectionThree />
      <Supplier />
      <RecommendedItems />
      <Services />
      <Region />
      <Subs />
      <Footer />
    </>
  );
}
