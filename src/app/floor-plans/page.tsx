import { FloorCards } from "@/components/floor-card";
import {Navbar1} from "@/components/blocks/shadcnblocks-com-navbar1";
import {Footerdemo} from "@/components/ui/footer-section";

export default function FloorPlans() {
  return (
    <>
    <div className="bg-blue-50">
    <Navbar1/>
    <FloorCards/>
    <Footerdemo/>
    </div>
    </>

  );
}
