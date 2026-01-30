import Link from "next/link";
import { Button } from "@/components/ui/Primitives";
import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400 mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Accepting new projects for Feb 2026
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Anything digital—<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">handled.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We scope fast, execute clean, and deliver with accountability—so you can move forward without friction.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/contact">
            <Button className="w-full sm:w-auto text-base px-8 py-4">
              Start a request
            </Button>
          </Link>
          <Link href="/contact#book">
            <Button variant="secondary" className="w-full sm:w-auto text-base px-8 py-4">
              Book a call
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-500 border-t border-white/5 pt-8 max-w-4xl mx-auto">
          {["Response within 24h", "Clear scope & timeline", "NDA available", "Senior-led delivery"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-violet-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
