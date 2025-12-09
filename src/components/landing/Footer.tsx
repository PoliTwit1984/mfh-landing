import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/20 bg-white/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                <Image
                  src="/logo.png"
                  width={24}
                  height={24}
                  className="h-6 w-auto"
                  alt="Logo"
                />
                <span className="font-serif font-bold text-gray-800 text-lg">MFH</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-500 font-medium">
                <Link href="#" className="hover:text-rose-500 transition-colors">About</Link>
                <Link href="#" className="hover:text-rose-500 transition-colors">Science</Link>
                <Link href="#" className="hover:text-rose-500 transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-rose-500 transition-colors">Terms</Link>
            </div>
            <div className="text-xs text-gray-400 font-medium">
                © 2025 My Favorite Human. All rights reserved.
            </div>
        </div>
    </footer>
  );
}
