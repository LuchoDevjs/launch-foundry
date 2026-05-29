export function GlowBackground() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_68%_0%,rgba(239,68,68,0.48),transparent_32%),linear-gradient(90deg,transparent,rgba(248,113,113,0.16),transparent)]" />
      <div className="absolute inset-x-0 top-[430px] -z-10 mx-auto h-64 max-w-2xl rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.6),rgba(239,68,68,0.2)_36%,rgba(59,130,246,0.12)_54%,transparent_72%)] blur-3xl" />
    </>
  );
}
