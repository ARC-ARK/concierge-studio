import { cases } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ProofPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Proof of Work</h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-16">Results speak. Here are selected anonymized case studies.</p>

        <div className="space-y-12">
          {cases.map((c) => (
            <div key={c.id} className="bg-surface/30 border border-white/10 rounded-2xl p-8 md:p-12 hover:border-violet-500/30 transition-colors">
               <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                     <div className="text-sm text-violet-400 font-bold tracking-wider mb-2">CLIENT</div>
                     <h3 className="text-2xl font-bold text-white mb-6">{c.client}</h3>
                     <div className="text-6xl font-bold text-white/5 mb-4">0{c.id}</div>
                  </div>
                  <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                     <div>
                        <h4 className="text-sm font-bold text-gray-500 uppercase mb-2">The Challenge</h4>
                        <p className="text-gray-300 leading-relaxed">{c.challenge}</p>
                     </div>
                     <div>
                        <h4 className="text-sm font-bold text-gray-500 uppercase mb-2">Our Approach</h4>
                        <p className="text-gray-300 leading-relaxed">{c.approach}</p>
                     </div>
                     <div>
                        <h4 className="text-sm font-bold text-gray-500 uppercase mb-2">Delivery</h4>
                        <p className="text-gray-300 leading-relaxed">{c.delivery}</p>
                     </div>
                     <div>
                        <h4 className="text-sm font-bold text-cyan-500 uppercase mb-2">Impact</h4>
                        <p className="text-white font-medium text-lg border-l-2 border-cyan-500 pl-4">{c.impact}</p>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
