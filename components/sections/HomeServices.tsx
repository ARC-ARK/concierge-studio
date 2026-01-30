import { services } from "@/lib/content";
import { copy } from "@/lib/copy";
import { Card, Badge } from "@/components/ui/Primitives";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HomeServices() {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <h2 className="text-3xl font-bold text-white">{copy.home.servicesTitle}</h2>
           <Link href="/services" className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1">
             {copy.common.viewAll} <ArrowUpRight className="w-4 h-4"/>
           </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card key={i} hoverEffect className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <Badge className="bg-violet-500/10 text-violet-300 border-violet-500/20">{s.category}</Badge>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{s.desc}</p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-gray-500 font-mono">{copy.servicesPage.youGet} {s.deliverables}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
