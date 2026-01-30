import { insights } from "@/lib/content";
import { copy } from "@/lib/copy";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button, Badge } from "@/components/ui/Primitives";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return insights.map((post) => ({
    slug: post.slug,
  }));
}

export default function InsightPost({ params }: { params: { slug: string } }) {
  const post = insights.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-20 max-w-3xl">
      <FadeIn>
        <Link href="/insights" className="inline-flex items-center text-sm text-gray-500 hover:text-white mb-8 transition-colors">
           <ArrowLeft className="w-4 h-4 mr-2" /> {copy.insightsPage.backLink}
        </Link>
        
        <div className="flex gap-2 mb-6">
           {post.tags.map(t => <Badge key={t} className="bg-violet-500/10 text-violet-300 border-violet-500/20">{t}</Badge>)}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
        <div className="text-gray-500 text-sm mb-12 border-b border-white/10 pb-8">{post.date} · {copy.insightsPage.readTimeLabel}</div>

        <div className="prose prose-invert prose-lg max-w-none">
           <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">{post.summary}</p>
           
           <p>This is a placeholder for the full article content. In a real implementation, this would be rendered from Markdown or a CMS.</p>
           
           <h3>Why this matters now</h3>
           <p>Digital operations are shifting from bloated agency retainers to surgical, on-demand execution. Teams that adapt to async workflows ship 40% faster.</p>
           
           <div className="bg-surface p-6 rounded-lg border-l-4 border-violet-500 my-8">
              <p className="m-0 italic text-gray-300">"The best code is the code you don't write. The best meeting is the one you don't have."</p>
           </div>
           
           <h3>The Execution Strategy</h3>
           <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>Scope ruthlessly.</li>
              <li>Deliver early drafts.</li>
              <li>Iterate based on data, not opinions.</li>
           </ul>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/10">
           <h4 className="text-white font-bold mb-4">{copy.insightsPage.ctaTitle}</h4>
           <Link href="/contact"><Button>{copy.insightsPage.ctaBtn}</Button></Link>
        </div>
      </FadeIn>
    </div>
  );
}
