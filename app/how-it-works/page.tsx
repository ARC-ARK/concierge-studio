import { steps } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button, Card } from "@/components/ui/Primitives";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How it works</h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-16">
          Transparent, asynchronous, and designed for speed. No retainer traps.
        </p>

        <div className="space-y-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-violet-500 to-transparent opacity-30"></div>

           {steps.map((step, i) => (
             <div key={i} className="flex gap-8 relative">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center text-xl font-bold text-white z-10">
                   {step.num}
                </div>
                <Card className="flex-grow p-8">
                   <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                   <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </Card>
             </div>
           ))}
        </div>

        <div className="mt-20 text-center p-12 rounded-2xl bg-white/5 border border-white/5">
           <h3 className="text-2xl font-bold text-white mb-4">Pricing Models</h3>
           <div className="grid md:grid-cols-3 gap-6 text-left mt-8">
              <div className="p-6">
                 <div className="text-violet-400 font-bold mb-2">Fixed Project</div>
                 <p className="text-sm text-gray-400">Clear scope, clear price. 50% upfront. Best for landing pages and decks.</p>
              </div>
              <div className="p-6 border-l border-white/10">
                 <div className="text-cyan-400 font-bold mb-2">Sprint Week</div>
                 <p className="text-sm text-gray-400">Dedicate a senior team for 5 days. Flat rate. Best for MVP builds.</p>
              </div>
              <div className="p-6 border-l border-white/10">
                 <div className="text-white font-bold mb-2">Retainer</div>
                 <p className="text-sm text-gray-400">Reserve 20-80 hours/month. Priority queue. Best for ongoing ops.</p>
              </div>
           </div>
           <div className="mt-12">
             <Link href="/contact"><Button>Start a project</Button></Link>
           </div>
        </div>
      </FadeIn>
    </div>
  );
}
