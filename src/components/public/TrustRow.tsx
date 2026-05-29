export function TrustRow({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 opacity-75 md:grid-cols-4">
      {items.map((item) => (
        <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center text-sm font-medium text-zinc-300">
          {item}
        </div>
      ))}
    </div>
  );
}
