import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/60 backdrop-blur-xl border-b border-white/40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            className="h-10 w-auto transition-transform group-hover:scale-110"
            alt="MFH Logo"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl tracking-tight text-gray-900 leading-none">
              MFH
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-rose-500 font-bold">
              My Favorite Human
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#problem"
            className="text-sm font-medium text-gray-600 hover:text-rose-600 transition-colors"
          >
            Why MFH?
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-gray-600 hover:text-rose-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#science"
            className="text-sm font-medium text-gray-600 hover:text-rose-600 transition-colors"
          >
            The Science
          </Link>
        </div>

        {/* CTA */}
        <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-rose-500/20 h-auto">
          Get Early Access
        </Button>
      </div>
    </nav>
  );
}
