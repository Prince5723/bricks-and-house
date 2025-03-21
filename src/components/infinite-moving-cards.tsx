"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="">
            <div className="px-8">
                <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                    Hear from our customers
                </h4>
                <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                    With over 800 satisfied clients, we take pride in delivering exceptional quality and reliability. Their trust and positive experiences inspire us to continue building with excellence.
                </p>
            </div>
            <div className="mt-16 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
}

const testimonials = [
    {
        quote:
            "We are confident that Brickandhouse provided the most value for the renovation and the creation of a new entrance for our building. We wholeheartedly endorse Brickandhouse and highly recommend their services.",
        name: "Rajesh Dhar",
        title: "Gurugram",
    },
    {
        quote:
            "From our initial meeting with your team, it was evident that they stood out from the majority of contractors I've worked with. Each member exhibited exceptional competence in their respective areas, and their level of respectfulness was truly noteworthy.",
        name: "Jayanta Banik",
        title: "UP",
    },
    {
        quote: "We are confident that Brickandhouse provided the most value for the renovation and the creation of a new entrance for our building. We wholeheartedly endorse Brickandhouse and highly recommend their services.",
        name: "Arsh Agrawal",
        title: "Delhi",
    },
    {
        quote:
            "Having collaborated with the founders of Bricksandhouse for over a decade, my extensive experience in various construction projects has consistently positioned them as one of the best.",
        name: "Sujeet Bhatia",
        title: "Delhi",
    },
    {
        quote:
            "I've been thoroughly impressed with Brickandhouse's performance on this project. Their organization and the efficiency they maintain on the job-site are commendable. I highly recommend their services.",
        name: "Subir Samanta",
        title: "Mumbai",
    },
    {
        quote:
            "Working with Brickandhouse was a breath of fresh air. Their innovative design ideas and flawless execution transformed our vision into reality. The attention to detail and commitment to customer satisfaction make them a standout choice for anyone seeking a construction partner.",
        name: "Amit Sharma",
        title: "UP",
    },
];
