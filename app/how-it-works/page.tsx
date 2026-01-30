import { steps } from "@/lib/content";
import { copy } from "@/lib/copy";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button, Card } from "@/components/ui/Primitives";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{copy.howPage.title}</h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-16">
          {copy.howPage.sub}
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
           <h3 className="text-2xl font-bold text-white mb-4">{copy.howPage.pricingTitle}</h3>
           <div className="grid md:grid-cols-3 gap-6 text-left mt-8">
              <div className="p-6">
                 <div className="text-violet-400 font-bold mb-2">{copy.howPage.pricing.fixed.title}</div>
                 <p className="text-sm text-gray-400">{copy.howPage.pricing.fixed.desc}</p>
              </div>
              <div className="p-6 border-l border-white/10">
                 <div className="text-cyan-400 font-bold mb-2">{copy.howPage.pricing.sprint.title}</div>
                 <p className="text-sm text-gray-400">{copy.howPage.pricing.sprint.desc}</p>
              </div>
              <div className="p-6 border-l border-white/10">
                 <div className="text-white font-bold mb-2">{copy.howPage.pricing.retainer.title}</div>
                 <p className="text-sm text-gray-400">{copy.howPage.pricing.retainer.desc}</p>
              </div>
           </div>
           <div className="mt-12">
             <Link href="/contact"><Button>{copy.howPage.ctaBtn}</Button></Link>
           </div>
        </div>
      </FadeIn>
    </div>
  );
}
