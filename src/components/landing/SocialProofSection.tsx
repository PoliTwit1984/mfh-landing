import React from "react";
import Image from "next/image";

export function SocialProofSection() {
  return (
    <section className="py-24 text-center relative overflow-hidden">
         <div className="absolute top-10 left-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
         <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl"></div>
         
        <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="font-serif text-3xl text-gray-900 mb-12">From the Founder</h2>
            <div className="glass-panel p-12 rounded-[2.5rem] max-w-3xl mx-auto shadow-xl border border-white/60 backdrop-blur-2xl">
                <p className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                    &quot;I built MFH because my therapist told me to journal, and I realized I didn&apos;t need a blank page—I needed a system. Most of us want to be thoughtful partners, we just get overwhelmed by life. MFH helps you turn that intention into action.&quot;
                </p>
                <div className="flex items-center justify-center gap-4">
                    <Image
                      src="/founder.jpeg"
                      width={64}
                      height={64}
                      className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
                      alt="Joe Wilson"
                    />
                    <div className="text-left">
                        <div className="font-bold text-gray-900 text-lg">Joe Wilson</div>
                        <div className="text-xs text-rose-500 font-bold uppercase tracking-wider">Founder</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
