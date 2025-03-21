import {Navbar1} from "@/components/blocks/shadcnblocks-com-navbar1";
import {HowItWorks} from "@/components/how-it-works";
import {HeroSection} from "@/components/hero";
import {Services} from "@/components/services";
import {InfiniteMovingCardsDemo} from "@/components/infinite-moving-cards";

export default function Home() {
  return (
    <>
    <Navbar1/>
    <HeroSection/>
    <HowItWorks/>
    <Services/>
    <InfiniteMovingCardsDemo/>
    </>

  );
}
