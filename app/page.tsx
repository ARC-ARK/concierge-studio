import Hero from "@/components/sections/Hero";
import HomeServices from "@/components/sections/HomeServices";
import FAQ from "@/components/sections/FAQ";
import { steps, cases, team } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card, Button, Badge } from "@/components/ui/Primitives";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      
      <HomeServices />

      {/* How it works */}
      <section className="py-24 bg-background border-y border-white/5">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-16 text-center">How we operate</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-4xl font-bold text-white/10 mb-4">{step.num}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Proof / Case Study Highlight */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-3xl font-bold text-white">Recent Proof</h2>
              <Link href="/proof" className="text-sm text-violet-400 hover:text-white">View all cases &rarr;</Link>
            </div>
            {/* Main Featured Case */}
            <div className="grid lg:grid-cols-2 gap-12 bg-gradient-to-br from-violet-900/10 to-transparent p-8 md:p-12 rounded-3xl border border-white/10 mb-8">
              <div>
                <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 mb-6">FEATURED CASE</Badge>
                <h3 className="text-3xl font-bold text-white mb-4">{cases[0].client}</h3>
                <p className="text-lg text-gray-300 mb-6">{cases[0].challenge}</p>
                <div className="space-y-4 mb-8">
                  <div className="pl-4 border-l-2 border-violet-500">
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Impact</div>
                    <div className="text-white font-medium">{cases[0].impact}</div>
                  </div>
                </div>
                <Link href="/proof">
                  <Button variant="outline">Read Case Study</Button>
                </Link>
              </div>
              <div className="relative h-64 lg:h-auto bg-black/40 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center">
                 {/* Abstract representation of work */}
                 <div className="text-gray-600 font-mono text-sm">[Client Project Preview]</div>
              </div>
            </div>
            {/* Mini Cards */}
            <div className="grid md:grid-cols-3 gap-6">
               {cases.slice(1,4).map((c) => (
                 <Card key={c.id} className="p-6">
                    <div className="text-sm text-gray-400 mb-2">{c.client}</div>
                    <div className="text-white font-bold mb-1">{c.impact}</div>
                    <div className="text-xs text-gray-600 truncate">{c.delivery}</div>
                 </Card>
               ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="py-24 bg-surface/30">
        <div className="container mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">The Gold Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Meet the senior specialists who lead every delivery. No juniors, no outsourcing.</p>
        </div>
        <div className="container mx-auto px-6 overflow-hidden">
             <div className="flex justify-center gap-6 flex-wrap">
                {team.slice(0,3).map((member, i) => (
                  <Card key={i} className="w-full md:w-80 text-left">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                           {member.name.charAt(0)}
                        </div>
                        <div>
                           <div className="text-white font-bold">{member.name}</div>
                           <div className="text-xs text-violet-400">{member.role}</div>
                        </div>
                     </div>
                     <p className="text-sm text-gray-400 italic mb-4">"{member.style}"</p>
                     <div className="flex gap-2 flex-wrap">
                        {member.tags.map(t => <Badge key={t} className="bg-black/40 text-gray-400 border-none">{t}</Badge>)}
                     </div>
                  </Card>
                ))}
             </div>
             <div className="text-center mt-10">
                <Link href="/gold-team"><Button variant="secondary">View Full Roster</Button></Link>
             </div>
        </div>
      </section>

      <FAQ />

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-violet-900/10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to move?</h2>
           <Link href="/contact">
              <Button className="h-14 px-10 text-lg rounded-full">Start a request</Button>
           </Link>
        </div>
      </section>
    </div>
  );
}
