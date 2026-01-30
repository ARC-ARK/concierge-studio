import { insights } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button, Badge } from "@/components/ui/Primitives";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// 關鍵：靜態輸出必備。告訴 Next.js 構建時要生成哪些頁面。
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
           <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
        </Link>
        
        <div className="flex gap-2 mb-6">
           {post.tags.map(t => <Badge key={t} className="bg-violet-500/10 text-violet-300 border-violet-500/20">{t}</Badge>)}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
        <div className="text-gray-500 text-sm mb-12 border-b border-white/10 pb-8">{post.date} · 5 min read</div>

        {/* 這裡使用 tailwind-typography (prose) 來排版內文 */}
        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
           <p className="text-xl leading-relaxed mb-8 font-light text-gray-200">{post.summary}</p>
           
           <p>This is a placeholder for the full article content. In a real production environment, this content would be rendered from Markdown, a CMS (like Contentful or Sanity), or MDX files.</p>
           
           <h3>Why this matters now</h3>
           <p>Digital operations are shifting from bloated agency retainers to surgical, on-demand execution. Teams that adapt to async workflows ship 40% faster.</p>
           
           <blockquote>
              "The best code is the code you don't write. The best meeting is the one you don't have."
           </blockquote>
           
           <h3>The Execution Strategy</h3>
           <ul>
              <li>Scope ruthlessly: Define exactly what "done" looks like before starting.</li>
              <li>Deliver early drafts: Perfect is the enemy of shipped.</li>
              <li>Iterate based on data: Opinions are interesting, but metrics are facts.</li>
           </ul>

           <h3>Technical Implementation</h3>
           <p>We leverage modern stacks like Next.js 14, Tailwind CSS, and edge computing to ensure your digital assets are not just beautiful, but performant and scalable globally.</p>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/10">
           <h4 className="text-white font-bold mb-4">Ready to implement this?</h4>
           <Link href="/contact"><Button>Talk to our strategists</Button></Link>
        </div>
      </FadeIn>
    </div>
  );
}
