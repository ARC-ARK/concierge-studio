import { team } from "@/lib/content";
import { Card, Badge, Button } from "@/components/ui/Primitives";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { Globe, Clock } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Gold Team</h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-16">
          Senior talent only. We deploy small, high-impact squads to solve your digital problems.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {team.map((member, i) => (
             <Card key={i} hoverEffect>
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-violet-400 text-sm font-medium">{member.role}</p>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 text-xs">
                      {member.name.charAt(0)}
                   </div>
                </div>
                
                <div className="flex gap-2 flex-wrap mb-6">
                   {member.tags.map(t => <Badge key={t}>{t}</Badge>)}
                </div>

                <p className="text-gray-300 text-sm italic mb-6">"{member.style}"</p>
                
                <div className="border-t border-white/5 pt-4 mb-6 flex items-center gap-4 text-xs text-gray-500">
                   <div className="flex items-center gap-1"><Globe className="w-3 h-3"/> {member.specs.split('·')[0]}</div>
                   <div className="flex items-center gap-1"><Clock className="w-3 h-3"/> {member.specs.split('·')[1]}</div>
                </div>

                <Link href={`/contact?specialist=${member.name}`}>
                  <Button variant="secondary" className="w-full text-xs h-10">Request {member.name}</Button>
                </Link>
             </Card>
           ))}
        </div>
      </FadeIn>
    </div>
  );
}
