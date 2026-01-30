"use client";

import { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button, Input, Textarea, Card } from "@/components/ui/Primitives";
import { FadeIn } from "@/components/ui/FadeIn";
import { team } from "@/lib/content";

const formSchema = z.object({
  category: z.string().min(1, "Please select a category"),
  goal: z.string().min(1, "Please define a goal"),
  timeline: z.string().min(1, "Timeline is required"),
  budget: z.string().min(1, "Budget is required"),
  contact: z.string().email("Invalid email").or(z.string().min(2, "Contact method required")),
  details: z.string().min(10, "Please provide more details"),
  specialist: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

// 將表單邏輯拆分為子組件，以便在 Suspense 中使用 hooks
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const searchParams = useSearchParams();
  const prefillSpecialist = searchParams.get("specialist");

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  // 自動預填邏輯
  useEffect(() => {
    if (prefillSpecialist) {
      // 簡單驗證該成員是否存在，避免亂填
      const exists = team.some(t => t.name === prefillSpecialist);
      if (exists) {
        setValue("specialist", prefillSpecialist);
      }
    }
  }, [prefillSpecialist, setValue]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      // --- OPTION 1: Formspree (已啟用) ---
      // ✅ 使用你的 Formspree 端點
      const response = await fetch("https://formspree.io/f/xwvbwevn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        // 如果 Formspree 回傳非 200 OK 的狀態
        setSubmitError("Failed to send request. Please try again later.");
      }

      // --- OPTION 2: 純靜態模擬 (已停用) ---
      /*
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form Data Submitted:", data);
      setIsSuccess(true);
      */

    } catch (error) {
      console.error(error);
      setSubmitError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full text-center py-12">
          <h2 className="text-2xl font-bold text-white mb-4">Request Received</h2>
          <p className="text-gray-400 mb-8">We've got your brief. Expect a response from our lead producer within 24 hours.</p>
          <Button onClick={() => setIsSuccess(false)} variant="outline">Send another</Button>
        </Card>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-mono text-gray-500 uppercase">Category</label>
          <select {...register("category")} className="w-full h-12 rounded-md border border-white/10 bg-black/20 px-3 text-sm text-white focus:border-violet-500 focus:outline-none">
            <option value="">Select...</option>
            <option value="Web">Web Dev</option>
            <option value="Design">Design</option>
            <option value="Copy">Copy & Content</option>
            <option value="Mixed">Mixed / Ops</option>
          </select>
          {errors.category && <span className="text-red-500 text-xs">{errors.category.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono text-gray-500 uppercase">Primary Goal</label>
          <Input {...register("goal")} placeholder="e.g. Leads, Brand, Sales..." />
          {errors.goal && <span className="text-red-500 text-xs">{errors.goal.message}</span>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
          <label className="text-xs font-mono text-gray-500 uppercase">Timeline</label>
          <select {...register("timeline")} className="w-full h-12 rounded-md border border-white/10 bg-black/20 px-3 text-sm text-white focus:border-violet-500 focus:outline-none">
            <option value="">Select...</option>
            <option value="ASAP">ASAP (Rush)</option>
            <option value="1-2 weeks">1-2 Weeks</option>
            <option value="1 month">1 Month</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-mono text-gray-500 uppercase">Budget Range</label>
          <select {...register("budget")} className="w-full h-12 rounded-md border border-white/10 bg-black/20 px-3 text-sm text-white focus:border-violet-500 focus:outline-none">
            <option value="">Select...</option>
            <option value="<2k">Under $2k</option>
            <option value="2k-5k">$2k - $5k</option>
            <option value="5k-10k">$5k - $10k</option>
            <option value="10k+">$10k+</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-mono text-gray-500 uppercase">Project Details</label>
        <Textarea {...register("details")} placeholder="Describe the challenge, audience, and constraints..." rows={5} />
        {errors.details && <span className="text-red-500 text-xs">{errors.details.message}</span>}
      </div>

      <div className="space-y-2">
          <label className="text-xs font-mono text-gray-500 uppercase">Your Contact (Email/Telegram)</label>
          <Input {...register("contact")} placeholder="john@company.com" />
          {errors.contact && <span className="text-red-500 text-xs">{errors.contact.message}</span>}
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-mono text-gray-500 uppercase">Preferred Specialist (Optional)</label>
        <select {...register("specialist")} className="w-full h-12 rounded-md border border-white/10 bg-black/20 px-3 text-sm text-white focus:border-violet-500 focus:outline-none">
          <option value="">No preference</option>
          {team.map(t => <option key={t.name} value={t.name}>{t.name} - {t.role}</option>)}
        </select>
      </div>

      {submitError && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm text-center">
          {submitError}
        </div>
      )}

      <div className="pt-4">
          <Button disabled={isSubmitting} className="w-full h-14 text-base">
            {isSubmitting ? "Sending..." : "Submit Request"}
          </Button>
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">NDA available upon request. <span className="text-gray-400">100% Confidential.</span></p>
          </div>
      </div>
    </form>
  );
}

// 主頁面組件：提供 Suspense Boundary
export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl">
      <FadeIn>
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Start a request</h1>
          <p className="text-gray-400">Tell us what you need. We'll handle the rest.</p>
        </div>
        
        <Suspense fallback={<div className="text-gray-500">Loading form...</div>}>
          <ContactForm />
        </Suspense>

        <div id="book" className="mt-20 pt-10 border-t border-white/10 text-center">
            <h3 className="text-white font-bold mb-2">Rather talk?</h3>
            <p className="text-gray-500 text-sm mb-4">Book a 15-min discovery call.</p>
            <Button variant="secondary" disabled>Booking Calendar Loading...</Button>
        </div>
      </FadeIn>
    </div>
  );
}
