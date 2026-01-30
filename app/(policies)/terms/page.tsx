import { FadeIn } from "@/components/ui/FadeIn";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <FadeIn>
        <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-lg text-gray-400">
          <p>Effective Date: January 1, 2026</p>
          <p>By accessing or using the Concierge Studio website and services, you agree to be bound by these Terms.</p>
          
          <h3>1. Services</h3>
          <p>We provide digital design, development, and operational services as described on our website. Specific deliverables are defined in individual project scopes.</p>
          
          <h3>2. Payments</h3>
          <p>For fixed projects, a 50% deposit is required to commence work. The remaining 50% is due upon delivery. Retainers are billed monthly in advance.</p>
          
          <h3>3. Intellectual Property</h3>
          <p>Upon full payment, all intellectual property rights for the final deliverables are transferred to the client. Concierge Studio retains the right to display the work in our portfolio unless an NDA specifies otherwise.</p>
          
          <p className="text-sm mt-8 opacity-50">Concierge Studio Ltd.</p>
        </div>
      </FadeIn>
    </div>
  );
}
