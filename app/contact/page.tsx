"use client";

import { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button, Input, Textarea, Card } from "@/components/ui/Primitives";
import { FadeIn } from "@/components/ui/FadeIn";
import { team } from "@/lib/content";
import { copy } from "@/lib/copy";

// [Updated] 使用集中管理的文案
const formSchema = z.object({
  category: z.string().min(1, copy.contact.form.validation.category),
  goal: z.string().min(1, copy.contact.form.validation.goal),
  timeline: z.string().min(1, copy.contact.form.validation.timeline),
  budget: z.string().min(1, copy.contact.form.validation.budget),
  // 複合驗證：先檢查是否為 Email，若不是則檢查長度
  contact: z.string().email(copy.contact.form.validation.emailInvalid).or(z.string().min(2, copy.contact.form.validation.contactRequired)),
  details: z.string().min(10, copy.contact.form.validation.detailsMin),
  specialist: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

function ContactForm() {
  // ... (中間邏輯保持不變，省略以節省篇幅) ...
  // 這裡的內容與上一個版本相同，只需要替換最上面的 formSchema 定義即可。
  // 為了確保檔案完整性，我還是列出完整的 ContactForm
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const searchParams = useSearchParams();
  const prefillSpecialist = searchParams.get("specialist");

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  useEffect(() => {
    if (prefillSpecialist) {
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
      // 記得確認這裡是你自己的 Formspree URL
      const response = await fetch("https://formspree.io/f/xwvbwevn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setSubmitError(copy.contact.form.errors.generic);
      }
    } catch (error) {
      console.error(error);
      setSubmitError(copy.contact.form.errors.network);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full text-center py-12">
          <h2 className="text-2xl font-bold text-white mb-4">{copy.contact.success.title}</h2>
          <p className="text-gray-400 mb-8">{copy.contact.success.sub}</p>
          <Button onClick={() => setIsSuccess(false)} variant="outline">{copy.contact.success.btn}</Button>
        </Card>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-mono text-gray-500 uppercase">{copy.contact.form.category}</label>
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
          <label className="text-xs font-mono text-gray-500 uppercase">{copy.contact.form.goal}</label>
          <Input {...register("goal")} placeholder="e.g. Leads, Brand, Sales..." />
          {errors.goal && <span className="text-red-500 text-xs">{errors.goal.message}</span>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
          <label className="text-xs font-mono text-gray-500 uppercase">{copy.contact.form.timeline}</label>
          <select {...register("timeline")} className="w-full h-12 rounded-md border border-white/10 bg-black/20 px-3 text-sm text-white focus:border-violet-500 focus:outline-none">
            <option value="">Select...</option>
            <option value="ASAP">ASAP (Rush)</option>
            <option value="1-2 weeks">1-2 Weeks</option>
            <option value="1 month">1 Month</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-mono text-gray-500 uppercase">{copy.contact.form.budget}</label>
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
        <label className="text-xs font-mono text-gray-500 uppercase">{copy.contact.form.details}</label>
        <Textarea {...register("details")} placeholder="Describe the challenge, audience, and constraints..." rows={5} />
        {errors.details && <span className="text-red-500 text-xs">{errors.details.message}</span>}
      </div>

      <div className="space-y-2">
          <label className="text-xs font-mono text-gray-500 uppercase">{copy.contact.form.contact}</label>
          <Input {...register("contact")} placeholder="john@company.com" />
          {errors.contact && <span className="text-red-500 text-xs">{errors.contact.message}</span>}
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-mono text-gray-500 uppercase">{copy.contact.form.specialist}</label>
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
            {isSubmitting ? copy.contact.form.sendingBtn : copy.contact.form.submitBtn}
          </Button>
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">{copy.contact.form.ndaPrefix} <span className="text-gray-400">{copy.contact.form.confidential}</span></p>
          </div>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl">
      <FadeIn>
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">{copy.contact.title}</h1>
          <p className="text-gray-400">{copy.contact.sub}</p>
        </div>
        
        <Suspense fallback={<div className="text-gray-500">{copy.contact.loadingFallback}</div>}>
          <ContactForm />
        </Suspense>

        <div id="book" className="mt-20 pt-10 border-t border-white/10 text-center">
            <h3 className="text-white font-bold mb-2">{copy.contact.book.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{copy.contact.book.sub}</p>
            <Button variant="secondary" disabled>{copy.contact.book.btnLoading}</Button>
        </div>
      </FadeIn>
    </div>
  );
}
