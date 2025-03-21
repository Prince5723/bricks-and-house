import {Navbar1} from "@/components/blocks/shadcnblocks-com-navbar1";
import {HowItWorks} from "@/components/how-it-works";
import {HeroSection} from "@/components/hero";
import {Services} from "@/components/services";
import {InfiniteMovingCardsDemo} from "@/components/infinite-moving-cards";
import {Faq} from "@/components/faq";

export default function Home() {
  return (
    <>
    <div className="">
    <Navbar1/>
    <HeroSection/>
    <HowItWorks/>
    <Services/>
    <InfiniteMovingCardsDemo/>
    <Faq/>
    </div>
    </>

  );
}
