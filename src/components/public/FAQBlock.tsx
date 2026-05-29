export function FAQBlock({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-white/10 rounded-[2rem] border border-white/10 bg-white/[0.025] px-6">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-medium text-white">
            {faq.question}
            <span className="text-zinc-500 transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-zinc-400">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
