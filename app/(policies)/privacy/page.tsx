import { FadeIn } from "@/components/ui/FadeIn";
import { copy } from "@/lib/copy";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <FadeIn>
        <h1 className="text-3xl font-bold text-white mb-8">{copy.policies.privacyTitle}</h1>
        <div className="prose prose-invert text-gray-400">
          <p>Last updated: January 2026</p>
          <p>At Concierge Studio, we take privacy seriously. We collect minimal data necessary to facilitate our services.</p>
          <h3>1. Information We Collect</h3>
          <p>We collect information you provide directly to us when you fill out a form or communicate with us.</p>
          <h3>2. How We Use Information</h3>
          <p>We use the information to respond to your requests and provide the services you have engaged us for.</p>
          {/* Add more legal text as needed */}
        </div>
      </FadeIn>
    </div>
  );
}
