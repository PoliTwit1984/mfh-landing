import React from "react";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="py-24 px-6 pb-32">
        <div className="max-w-5xl mx-auto">
            <div className="glass-panel rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden bg-gradient-to-br from-white/90 to-white/50 border border-white/60 shadow-2xl">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-rose-100/40 via-violet-100/40 to-amber-100/40 z-0"></div>
                
                <div className="relative z-10">
                    <div className="inline-block p-4 bg-white rounded-3xl shadow-sm mb-8 rotate-3 border border-gray-100">
                      <Image
                        src="/logo.png"
                        width={64}
                        height={64}
                        className="h-16 w-auto"
                        alt="Logo"
                      />
                    </div>
                    <h2 className="font-serif text-4xl lg:text-6xl text-gray-900 mb-6 leading-tight">Become more thoughtful,<br />one small moment at a time.</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Join the waitlist for the relationship companion that helps you show up.</p>
                    
                    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                        <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-full border border-gray-200 bg-white/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-800 placeholder-gray-400 shadow-sm text-lg" />
                        <button type="button" className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">Get Early Access</button>
                    </form>
                    <p className="mt-6 text-sm text-gray-400 font-medium flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        Join 10,000+ others waiting for launch.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}
