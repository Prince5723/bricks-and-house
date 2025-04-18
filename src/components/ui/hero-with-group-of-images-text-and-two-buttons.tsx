'use client';
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from 'next/navigation';


function Hero() {
  const router = useRouter();
  return (
    <div className="w-full py-12 px-12 lg:py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          {/* Left Section */}
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Building with Trust</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Constructing your Dreams, Powering Smart Living
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              We deliver construction with precision and passion — whether it’s residential, commercial, or custom smart homes. Our focus is on durability, functionality, and modern living, using the latest technologies to create spaces that work smarter for you.


              </p>
            </div>
            <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4 cursor-pointer" variant="outline" onClick={() => router.push("/login")}>
                Log in here <MoveRight className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4 cursor-pointer" onClick={() => router.push("/contact")} >
                 Free Consultatoin <PhoneCall className="w-4 h-4" />
              </Button>
              
            </div>
          </div>

          {/* Right Section with Images */}
          <div className="grid grid-cols-2 gap-8">
            <div className="relative rounded-md aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8fDA%3D"
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="relative rounded-md row-span-2 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560440021-33f9b867899d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNldHRsZSUyMGhvbWV8ZW58MHwxfDB8fHww"
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="relative rounded-md aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
