import { FocusCards } from "@/components/ui/focus-cards";

export function ProjectsCards() {
  const cards = [
    {
      title: "Noida Metro",
      src: "/noida metro.webp",
    },
    {
      title: "Villa and Flats",
      src: "/villa and flats.webp",
    },
    {
      title: "Government School",
      src: "/govt school.webp",
    },
    {
      title: "Residential Building",
      src: "/residential building.webp",
    },
    {
      title: "DIMS Medical College",
      src: "/dims medical college.webp",
    },
    {
      title: "Kendriya Vidyalaya",
      src: "/kendriya vidyalaya.jpeg",
    },
  ];

  return <FocusCards cards={cards} />;
}
