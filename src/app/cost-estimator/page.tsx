import {Navbar1} from "@/components/blocks/shadcnblocks-com-navbar1";
import {Footerdemo} from "@/components/ui/footer-section";
import CostEstimator from "@/components/cost-estimator";

export default function FloorPlans() {
  return (
    <>
    <div className="bg-blue-50">
    <Navbar1/>
    <CostEstimator/>
    <Footerdemo/>
    </div>
    </>

  );
}
