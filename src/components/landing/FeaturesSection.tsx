import React from "react";
import { Sparkles, Wand2, LayoutGrid, BrainCircuit, ArrowRight } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-rose-500 font-bold tracking-widest text-xs uppercase bg-rose-50 px-4 py-2 rounded-full border border-rose-100 shadow-sm">The Solution</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 mt-6">Your Relationship OS</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Feature 1 */}
          <div className="glass-panel p-8 rounded-[2rem] glass-card-hover relative overflow-hidden group h-full flex flex-col">
            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-100 rounded-bl-full -mr-10 -mt-10 opacity-50 transition-transform group-hover:scale-110"></div>
            <Sparkles className="w-10 h-10 text-rose-500 mb-6 relative z-10" />
            <h3 className="font-serif text-2xl text-gray-900 mb-3">Daily Insight</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-1">Micro-actionable, research-backed advice tailored to your specific relationship context. Small nudges that create big change.</p>
            <div className="mt-auto pt-5 border-t border-gray-100">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-wider flex items-center gap-2">Proactive Nudges <ArrowRight className="w-3 h-3" /></span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="glass-panel p-8 rounded-[2rem] glass-card-hover relative overflow-hidden group h-full flex flex-col">
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-100 rounded-bl-full -mr-10 -mt-10 opacity-50 transition-transform group-hover:scale-110"></div>
            <Wand2 className="w-10 h-10 text-violet-500 mb-6 relative z-10" />
            <h3 className="font-serif text-2xl text-gray-900 mb-3">Ask Muse</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-1">Your AI companion. Ask for gift ideas, date plans, or how to phrase a difficult text. It remembers everything you tell it.</p>
            <div className="mt-auto pt-5 border-t border-gray-100">
              <span className="text-xs font-bold text-violet-500 uppercase tracking-wider flex items-center gap-2">Context Aware <ArrowRight className="w-3 h-3" /></span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="glass-panel p-8 rounded-[2rem] glass-card-hover relative overflow-hidden group h-full flex flex-col">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100 rounded-bl-full -mr-10 -mt-10 opacity-50 transition-transform group-hover:scale-110"></div>
            <LayoutGrid className="w-10 h-10 text-amber-500 mb-6 relative z-10" />
            <h3 className="font-serif text-2xl text-gray-900 mb-3">Heartboard</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-1">A visual sanctuary for gift ideas, travel dreams, and vibe inspiration. Save it before you forget it. Pinterest for your partner.</p>
            <div className="mt-auto pt-5 border-t border-gray-100">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider flex items-center gap-2">Visual Vault <ArrowRight className="w-3 h-3" /></span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="glass-panel p-8 rounded-[2rem] glass-card-hover relative overflow-hidden group h-full flex flex-col">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-100 rounded-bl-full -mr-10 -mt-10 opacity-50 transition-transform group-hover:scale-110"></div>
            <BrainCircuit className="w-10 h-10 text-emerald-500 mb-6 relative z-10" />
            <h3 className="font-serif text-2xl text-gray-900 mb-3">Wisdom</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-1">MFH connects the dots. &quot;You fight more when work is busy.&quot; It sees patterns you might miss and helps you navigate them.</p>
            <div className="mt-auto pt-5 border-t border-gray-100">
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-2">Pattern Recognition <ArrowRight className="w-3 h-3" /></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
