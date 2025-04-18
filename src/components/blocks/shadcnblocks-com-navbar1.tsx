import { Book, Menu } from "lucide-react";
import * as React from 'react';
import Link from "next/link";  // Import Next.js Link

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactElement;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/bricks-and-house-logo.webp",
    alt: "logo",
    title: "",
  },
  menu = [
    { title: "Home", url: "/" },
    { title: "Our Projects", url: "/projects" },
    { title: "Floor Plans", url: "/floor-plans" },
    { title: "Cost Estimator", url: "/cost-estimator" },
    { title: "About Us", url: "/about" },
    { title: "Contact Us", url: "/contact" },
  ],
  auth = {
    signup: { text: "Request A Free Consultation", url: "/contact" },
  },
}: Navbar1Props) => {
  return (
    <section className="px-8 py-4 bg-blue-50">
      <div className="container">
        {/* Desktop Navbar */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-48" alt={logo.alt} />
              <span className="text-lg font-semibold">{logo.title}</span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <Link href={auth.signup.url}>{auth.signup.text}</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg font-semibold">{logo.title}</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-blue-50">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-blue-50">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="w-8" alt={logo.alt} />
                      <span className="text-lg font-semibold">{logo.title}</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    {menu.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="font-semibold hover:bg-blue-100 rounded-md px-4 py-2"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild className="bg-black text-white hover:bg-gray-800">
                      <Link href={auth.signup.url}>{auth.signup.text}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  return (
    <NavigationMenuItem key={item.title}>
      <Link
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-blue-50 px-4 py-2 text-md font-medium text-muted-foreground transition-colors hover:bg-blue-100 hover:text-accent-foreground"
      >
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};

export { Navbar1 };
