"use client";
import React from "react";
import { GradientCard } from "./ui/background-gradient";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Floor Plan 1",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering",
    image: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvb3JzJTIwcGxhbnMlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D",
    // price: "$100",
    link: "https://buildahomes.com/public/floorplans/240424061944_20240212%20GROUND%20FLOOR%20PLAN%2007%20TH%204-Model-2.pdf", // Unique link
  },
  {
    id: 2,
    name: "Floor Plan 2",
    description:
      "The Nike Air Force 1 Low White is a timeless classic. Its all-white leather design makes it a staple in sneaker culture.",
    image: "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGZsb29ycyUyMHBsYW5zJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww",
    // price: "$90",
    link: "https://buildahomes.com/public/floorplans/240424062037_20240212%20SECOND%20FLOOR%20PLAN%2007%20TH%204-Model-1.pdf", // Unique link
  },
  {
    id: 3,
    name: "Floor Plan 3",
    description:
      "The Adidas Yeezy Boost 350 V2 Bone offers a sleek design and comfortable fit, making it a must-have for sneaker enthusiasts.",
    image: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZsb29ycyUyMHBsYW5zJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww",
    // price: "$220",
    link: "https://buildahomes.com/public/floorplans/240424062150_20240212%20FIRST%20FLOOR%20PLAN%2007%20TH%204-Model-1.pdf", // Unique link
  },
  {
    id: 4,
    name: "Floor Plan 4",
    description:
      "The New Balance 550 White Grey offers a clean, vintage-inspired look perfect for everyday wear.",
    image: "https://images.unsplash.com/photo-1575971637203-d6255d9947a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZsb29ycyUyMHBsYW5zJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww",
    // price: "$110",
    link: "https://buildahomes.com/public/floorplans/240424062255_20240212%20THIRD%20FLOOR%20PLAN%2007%20TH%204-Model-1.pdf", // Unique link
  },
];

export function FloorCards() {

  const handleButtonClick = (link: string) => {
    window.open(link, '_blank'); // Opens the link in a new tab
};


  return (
    <>
      <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">Our Floor Plans</h4>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <GradientCard
            key={product.id}
            className="rounded-[22px] w-full sm:w-[48%] md:w-[30%] lg:w-[22%] p-4 sm:p-6  dark:bg-zinc-900 transition-transform hover:scale-105"
          >
            <Image
              src={product.image}
              alt={product.name}
              height={300}
              width={300}
              className="object-contain w-full h-60"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {product.name}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {product.description}
            </p>
            <button
              onClick={() => handleButtonClick(product.link)}
              className="rounded-full py-2 px-6 cursor-pointer text-white flex items-center justify-center space-x-2 bg-black mt-4 text-sm font-semibold transition-colors duration-300 hover:bg-primary dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              <span className="text-white">See Floor Plan</span>
            </button>

          </GradientCard>
        ))}
      </div>
    </>
  );
}
