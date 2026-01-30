import { services } from "@/lib/content";
import { Card, Badge, Button } from "@/components/ui/Primitives";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-16">
          Modular digital services. We act as your specialized department for web, design, and content.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Card key={i} className="flex flex-col">
              <Badge className="w-fit mb-4 bg-violet-500/10 text-violet-300 border-violet-500/20">{s.category}</Badge>
              <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{s.desc}</p>
              <div className="bg-black/40 p-4 rounded-lg border border-white/5 mb-6">
                <span className="text-xs text-gray-500 font-bold block mb-1">YOU GET:</span>
                <span className="text-sm text-gray-300">{s.deliverables}</span>
              </div>
              <div className="mt-auto">
                 <p className="text-xs text-gray-500 mb-4">Deliverables & pricing scoped after brief.</p>
                 <Link href="/contact">
                   <Button variant="secondary" className="w-full">Request This</Button>
                 </Link>
              </div>
            </Card>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
