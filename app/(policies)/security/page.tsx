import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Primitives";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <FadeIn>
        <div className="flex items-center gap-4 mb-8">
           <ShieldCheck className="w-12 h-12 text-cyan-400" />
           <h1 className="text-3xl font-bold text-white">Security & NDA</h1>
        </div>
        
        <div className="prose prose-invert prose-lg text-gray-400 mb-12">
          <p>We work with high-growth startups and enterprise clients who value discretion. Your data security and intellectual property rights are paramount.</p>
          
          <h3>Data Handling</h3>
          <p>All client assets are stored in encrypted environments. Access is strictly limited to the specific team members working on your project.</p>
          
          <h3>Non-Disclosure Agreements (NDA)</h3>
          <p>We are happy to sign your standard NDA or provide our own mutual NDA template before any sensitive details are shared.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
           <h3 className="text-xl font-bold text-white mb-4">Need an NDA signed first?</h3>
           <p className="text-gray-400 mb-6">Send us your document or request ours. We typically turn these around in 2 hours.</p>
           <Link href="/contact">
              <Button>Request NDA via Contact</Button>
           </Link>
        </div>
      </FadeIn>
    </div>
  );
}
