import { insights } from "@/lib/content";
import { Card, Badge } from "@/components/ui/Primitives";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

export default function InsightsPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Insights</h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-16">
          Notes on strategy, design, and operations from the field.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
           {insights.map((post) => (
             <Link key={post.slug} href={`/insights/${post.slug}`}>
               <Card hoverEffect className="h-full group cursor-pointer">
                  <div className="flex justify-between text-xs text-gray-500 mb-4">
                     <span>{post.date}</span>
                     <div className="flex gap-2">
                       {post.tags.map(t => <span key={t} className="text-violet-400">#{t}</span>)}
                     </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">{post.title}</h3>
                  <p className="text-gray-400">{post.summary}</p>
               </Card>
             </Link>
           ))}
        </div>
      </FadeIn>
    </div>
  );
}
