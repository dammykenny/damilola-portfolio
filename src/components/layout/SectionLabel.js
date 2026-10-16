export default function SectionLabel({ children }) {
  return (
    <div className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-white/60">
      <span className="h-px w-8 bg-[var(--accent)]" />
      {children}
    </div>
  );
}