import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "Collaboration Projects",
      description:
        "Hassle-free construction of your dream home—be it independent floors or villas—for Delhi NCR owners looking to build on vacant plots or demolish and rebuild existing homes.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r dark:border-neutral-800",
    },
    {
      title: "Interior Decoration",
      description:
        "Transform your space with elegant and personalized interior decor. From modern minimalism to classic luxury, we bring your vision to life with style and precision.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b dark:border-neutral-800",
    },
    {
      title: "Turkey Projects",
      description:
        "Turn your property into a masterpiece with our Turkey Projects. We design and build new homes in Delhi NCR at our own cost, in exchange for a floor(s) in the newly constructed property.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r dark:border-neutral-800",
    },
    {
      title: "Renovation",
      description:
        "Revamp your space with our expert renovation services. From kitchen makeovers to full home transformations, we bring your vision to life with seamless, quality solutions.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with thousands of features
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXN8ZW58MHwxfDB8fHww"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10 h-full">
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <Image
            src="https://images.unsplash.com/photo-1551711974-faf378be34b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnN0cnVjdGlvbnxlbnwwfDF8MHx8fDA%3D"
            alt="YouTube thumbnail"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWVzfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWVzfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWVzfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXN8ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbWVzfGVufDB8MHwwfHx8MA%3D%3D",

  ];

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <div
            key={"images-first" + idx}
            style={{
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden hover:scale-110 hover:z-10 transition-all duration-200"
          >
            <Image
              src={image}
              alt="interior decors"
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <div
            key={"images-second" + idx}
            style={{
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden hover:scale-110 hover:z-10 transition-all duration-200"
          >
            <Image
              src={image}
              alt="bali images"
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative flex gap-10 h-full">
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <Image
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvbWVzfGVufDB8MXwwfHx8MA%3D%3D"
            alt="Renovation image"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};