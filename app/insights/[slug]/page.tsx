// [Phase 2: Update Imports] 匯入 ContentBlock 型別
import { insights, type ContentBlock } from "@/lib/content";
import { copy } from "@/lib/copy";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button, Badge } from "@/components/ui/Primitives";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// [Phase 2: Strict Typed Renderer]
function InsightBlocks({ blocks }: { blocks: readonly ContentBlock[] }) {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h3":
            return <h3 key={i}>{b.text}</h3>;
          case "quote":
            return (
              <div key={i} className="bg-surface p-6 rounded-lg border-l-4 border-violet-500 my-8">
                <p className="m-0 italic text-gray-300">{b.text}</p>
              </div>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc pl-5 space-y-2 text-gray-400">
                {b.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            );
          case "p":
          default:
            return <p key={i}>{b.text}</p>;
        }
      })}
    </div>
  );
}

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

        {/* [Phase 2: Fixed] 使用嚴格型別的渲染器 */}
        <InsightBlocks blocks={post.blocks} />
        
        <div className="mt-20 pt-10 border-t border-white/10">
           <h4 className="text-white font-bold mb-4">{copy.insightsPage.ctaTitle}</h4>
           <Link href="/contact"><Button>{copy.insightsPage.ctaBtn}</Button></Link>
        </div>
      </FadeIn>
    </div>
  );
}
