import React from "react";
import { Map, Scale, Layers, Quote } from "lucide-react";
import Image from "next/image";

export function ScienceSection() {
  return (
    <section className="py-24 bg-white/60 backdrop-blur-md border-y border-white/40" id="science">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase mb-4 tracking-wider border border-emerald-200">Evidence Based</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">Not a diary. <br />A <span className="italic text-emerald-600">Science-Backed</span> System.</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">MFH isn&apos;t just about recording memories. It&apos;s built on principles from relationship science and couples therapy to actively strengthen your bond.</p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-emerald-600 mt-1 border border-emerald-100"><Map className="w-6 h-6" /></div>
                <div>
                  <strong className="text-gray-900 block text-xl mb-1">Love Maps (Gottman)</strong>
                  <p className="text-sm text-gray-500 leading-relaxed">Knowing the small details of your partner&apos;s world is the foundation of true intimacy.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-emerald-600 mt-1 border border-emerald-100"><Scale className="w-6 h-6" /></div>
                <div>
                  <strong className="text-gray-900 block text-xl mb-1">The Magic Ratio</strong>
                  <p className="text-sm text-gray-500 leading-relaxed">Focusing on small, positive interactions to buffer stress and build emotional resilience.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-emerald-600 mt-1 border border-emerald-100"><Layers className="w-6 h-6" /></div>
                <div>
                  <strong className="text-gray-900 block text-xl mb-1">External Scaffolding (ADHD)</strong>
                  <p className="text-sm text-gray-500 leading-relaxed">Tools that remember so your brain doesn&apos;t have to, reducing the mental load of partnership.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="glass-panel p-10 lg:p-14 rounded-[3rem] relative bg-gradient-to-br from-white/90 to-white/50 border border-white/60 shadow-xl">
            <Quote className="w-16 h-16 text-rose-200 absolute top-10 left-10" />
            <p className="font-serif text-2xl lg:text-3xl text-gray-800 relative z-10 pt-12 leading-relaxed italic">
              &quot;Couples thrive not from grand gestures once a year, but from consistent, meaningful micro-interactions every single day.&quot;
            </p>
            <div className="mt-10 flex items-center gap-4 border-t border-gray-200/50 pt-8">
              <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-md relative">
                   <Image 
                     src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                     alt="Dr Sarah"
                     fill
                     className="object-cover"
                   />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">Dr. Sarah K.</div>
                <div className="text-sm text-gray-500 font-medium">Relationship Therapist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
