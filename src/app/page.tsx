import {Navbar1} from "@/components/blocks/shadcnblocks-com-navbar1";
import {HowItWorks} from "@/components/how-it-works";
import {HeroSection} from "@/components/hero";
import {Services} from "@/components/services";
import {InfiniteMovingCardsDemo} from "@/components/infinite-moving-cards";
import {Faq} from "@/components/faq";
import {Footerdemo} from "@/components/ui/footer-section";
import {Pricing} from "@/components/pricing-section";
import {PopupForm} from "@/components/pop-up-form";

export default function Home() {
  return (
    <>
    <div className="">
      <PopupForm/>
    <Navbar1/>
    <HeroSection/>
    <HowItWorks/>
    <Services/>
    <Pricing/>
    <InfiniteMovingCardsDemo/>
    <Faq/>
    <Footerdemo/>
    </div>
    </>

  );
}
