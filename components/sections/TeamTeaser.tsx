import Link from "next/link";
import { team } from "@/lib/content";
import { copy } from "@/lib/copy";
import { Card, Badge, Button } from "@/components/ui/Primitives";

export default function TeamTeaser() {
  return (
    <section className="py-24 bg-surface/30">
      <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{copy.home.team.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{copy.home.team.sub}</p>
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
              <Link href="/gold-team"><Button variant="secondary">{copy.home.team.btn}</Button></Link>
           </div>
      </div>
    </section>
  );
}
