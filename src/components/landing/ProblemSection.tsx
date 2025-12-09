import React from "react";
import { CloudOff, BatteryWarning, Shuffle } from "lucide-react";

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-white/40 backdrop-blur-sm border-t border-white/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-6 leading-tight">
          Ideally, we remember everything.<br />
          In reality, <span className="text-rose-500 italic">life gets loud.</span>
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          Most people want to be a great partner, but mental load, busy schedules, or ADHD can make it hard to stay intentional. Relationships often slip into autopilot not from a lack of love, but a lack of a system.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-3xl text-left hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-rose-100 text-rose-500 rounded-2xl flex items-center justify-center mb-6">
              <CloudOff className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">The &quot;I Forgot&quot; Guilt</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Forgetting small details, dates, or preferences despite caring deeply about your partner.</p>
          </div>
          <div className="glass-panel p-8 rounded-3xl text-left hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-violet-100 text-violet-500 rounded-2xl flex items-center justify-center mb-6">
              <BatteryWarning className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">Decision Fatigue</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Wanting to do something nice but blanking on ideas when the moment actually comes.</p>
          </div>
          <div className="glass-panel p-8 rounded-3xl text-left hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-amber-100 text-amber-500 rounded-2xl flex items-center justify-center mb-6">
              <Shuffle className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">Reactive Mode</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Only showing appreciation on big holidays or birthdays, missing the daily magic.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
