import Link from "next/link";
import { siteConfig } from "@/lib/content";
import { copy } from "@/lib/copy";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-lg font-bold text-white">{siteConfig.shortName}</h3>
            <p className="text-gray-500 text-sm mt-1">{siteConfig.description}</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
             <Link href="/privacy" className="hover:text-white transition-colors">{copy.footer.privacy}</Link>
             <Link href="/terms" className="hover:text-white transition-colors">{copy.footer.terms}</Link>
             <Link href="/security" className="hover:text-white transition-colors">{copy.footer.security}</Link>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center md:text-left text-xs text-gray-600">
          © {currentYear} {siteConfig.name}. {copy.footer.rights}
        </div>
      </div>
    </footer>
  );
}
