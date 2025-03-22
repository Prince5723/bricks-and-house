import {Navbar1} from "@/components/blocks/shadcnblocks-com-navbar1";
import {Footerdemo} from "@/components/ui/footer-section";
import {ProjectsCards} from "@/components/projects-card";

export default function Home() {
  return (
    <>
    <div className="">
    <Navbar1/>
    <ProjectsCards/>
    <Footerdemo/>
    </div>
    </>

  );
}
