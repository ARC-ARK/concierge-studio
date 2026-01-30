"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navigation, siteConfig } from "@/lib/content";
import { copy } from "@/lib/copy";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Primitives";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === item.href ? "text-white" : "text-gray-400"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
            <Link href="/contact">
              <Button variant="primary" className="h-9 px-4 text-xs">
                  {copy.nav.startRequestBtn}
              </Button>
            </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-white/10 p-6 space-y-4 shadow-2xl">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-gray-300 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
           <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-4">{copy.nav.startRequestBtn}</Button>
           </Link>
        </div>
      )}
    </nav>
  );
}
