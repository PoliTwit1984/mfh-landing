import React from "react";
import { Sparkles, ShieldCheck, BrainCircuit } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 text-rose-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles className="w-3 h-3" /> Relationship Intelligence
            </div>

            <h1 className="font-serif text-5xl lg:text-7xl text-gray-900 leading-[1.1] mb-6">
              Love lives in the <span className="text-gradient italic">details.</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A relationship companion that helps you remember what matters, turn
              intentions into actions, and show up for your favorite human.
            </p>

            <div className="flex w-full justify-center lg:justify-start">
              <iframe
                src="https://subscribe-forms.beehiiv.com/2c4805c2-b554-4f36-adaf-beb90794229c"
                data-test-id="beehiiv-embed"
                frameBorder="0"
                scrolling="no"
                style={{
                  margin: 0,
                  borderRadius: "0px",
                  backgroundColor: "transparent",
                  width: "438px",
                  height: "93px",
                  maxWidth: "100%",
                }}
              />
            </div>

            <p className="mt-6 text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Built on research-backed principles.
            </p>
          </div>

          {/* Hero Visual (3D iPhone) */}
          <div className="relative lg:h-[650px] flex items-center justify-center iphone-container">
            {/* Decorative blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-rose-300/30 to-violet-300/30 rounded-full blur-3xl animate-pulse"></div>

            <div className="iphone-mockup">
              <div className="dynamic-island"></div>
              {/* Mock App Content */}
              <div className="iphone-screen p-4 pt-12 flex flex-col gap-4">
                {/* Hero Card */}
                <div className="w-full aspect-[4/5] bg-gray-900 rounded-3xl relative overflow-hidden shadow-md">
                   {/* Unsplash image from original HTML */}
                  <Image 
                    src="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=600&auto=format&fit=crop"
                    alt="Couple"
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h2 className="font-serif text-4xl text-white drop-shadow-md">
                      Holly
                    </h2>
                    <div className="flex gap-2 mt-2">
                      <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold border border-white/20">
                        Quality Time
                      </div>
                    </div>
                  </div>
                </div>

                {/* Widget */}
                <div className="glass-panel p-3 rounded-2xl flex gap-3 items-center">
                  <div className="h-10 w-10 bg-rose-100 rounded-lg flex items-center justify-center text-rose-500">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-800">
                      Daily 5 Questions
                    </div>
                    <div className="w-24 h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                      <div className="h-full w-1/3 bg-rose-500"></div>
                    </div>
                  </div>
                </div>

                {/* List */}
                <div className="glass-panel p-3 rounded-2xl flex flex-col gap-2">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Upcoming
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white px-2 py-1 rounded text-center shadow-sm">
                      <div className="text-[8px] text-rose-500 font-bold">
                        OCT
                      </div>
                      <div className="text-sm font-serif font-bold">24</div>
                    </div>
                    <div className="text-xs font-bold text-gray-800">
                      Dinner at Mario&apos;s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="https://subscribe-forms.beehiiv.com/embed.js" />
    </section>
  );
}
