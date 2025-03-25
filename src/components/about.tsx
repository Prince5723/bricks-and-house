"use client";

import { Users, Building2, Award, Clock, CheckCircle, Hammer, HardHat } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80"
          alt="Construction site with workers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <div className="text-center text-white p-8 space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-4 tracking-tight"
            >
              Building Your Vision
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl max-w-2xl mx-auto font-light"
            >
              Excellence in construction since 2014
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Building2, stat: "200+", text: "Projects Completed" },
            { icon: Users, stat: "150+", text: "Team Members" },
            { icon: Award, stat: "10+", text: "Years Experience" },
            { icon: Clock, stat: "98%", text: "On-Time Delivery" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300 border border-gray-100"
            >
              <item.icon className="w-14 h-14 mx-auto mb-6 text-blue-600" />
              <h3 className="text-4xl font-bold text-gray-800 mb-3">{item.stat}</h3>
              <p className="text-gray-600 text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">Our Story of Excellence</h2>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                For over 25 years, we've been at the forefront of the construction industry, 
                delivering exceptional projects that transform communities and create lasting value. 
                Our commitment to quality, innovation, and sustainability has made us a trusted 
                partner for clients across the country.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We specialize in both commercial and residential construction, bringing the same 
                level of dedication and expertise to every project, regardless of size. Our team 
                of skilled professionals ensures that each project meets our high standards of 
                quality and safety.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Custom Design Solutions",
                "Expert Project Management",
                "Sustainable Building",
                "Quality Craftsmanship"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
              alt="Construction team meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}