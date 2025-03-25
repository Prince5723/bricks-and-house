import { Faq3 } from "@/components/blocks/faq3"

const demoData = {
  heading: "Frequently asked questions",
  description:
    "Everything you need to know about BrickAndHouse. Can't find the answer you're looking for? Feel free to contact our support team.",
  items: [
    {
      id: "faq-1",
      question: " Do brickandhouse businesses require an upfront payment? ",
      answer:
        "Certainly. Brickandhouse requires a booking amount equivalent to approximately 2% of the total home construction cost. This payment covers the expenses for digital surveys, soil tests, and the creation of a floor plan.",
    },
    {
      id: "faq-2",
      question: " How long will it take to build a house from scratch?",
      answer:
        "The estimated time to build a full house can vary significantly based on various factors such as the size and complexity of the house, local regulations, weather conditions, and the efficiency of the construction team. On average, a simple single-family home might take anywhere from several months to a year to complete. Larger or more intricate homes, as well as factors like permit approval and unexpected delays, can extend the timeline. It's advisable to discuss specific details with your chosen builder or contractor for a more accurate estimate tailored to your project.",
    },
    {
      id: "faq-3",
      question: " What should a builder or constructor take into account when building a home? ",
      answer:
        "When constructing a home, prioritize a reputable builder, establish a realistic budget and timeline, and ensure clear communication through detailed contracts. Familiarize yourself with local regulations, choose quality materials, and consider energy-efficient features. Regular updates and flexibility during the process contribute to a successful home construction project.",
    },
    {
      id: "faq-4",
      question: " What services does brickandhouse provide? ",
      answer:
        "Brickandhouse offers comprehensive construction services, including architectural design, construction, renovation, and interior design for residential and commercial projects.",
    },
    {
      id: "faq-5",
      question: " How do I ensure the quality of materials used in my construction project? ",
      answer:
        "We prioritize quality and transparency. During the planning phase, we discuss and specify the materials to be used. Our team ensures that only high-quality materials are utilized throughout the construction process.",
    },
    {
        id: "faq-6",
        question: "How do I track the progress of my construction project? ",
        answer:
          "We keep our clients informed through regular updates, and you will have access to an online portal where you can track the progress of your project, view schedules, and communicate with our team."
      },
  ],
  supportHeading: "Still have questions?",
  supportDescription:
    "Can't find the answer you're looking for? Our support team is here to help with any such questions or concerns.",
  supportButtonText: "Contact Support",
  supportButtonUrl: "/contact",
};

function Faq() {
  return <Faq3 {...demoData} />;
}

export { Faq };
