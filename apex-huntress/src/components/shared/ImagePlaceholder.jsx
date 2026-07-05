export default function ImagePlaceholder({ label, aspect = "aspect-square", className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-dashed border-cyan-400/30 bg-gradient-to-br from-white/[0.03] to-black/40 ${aspect} ${className}`}
    >
      <span className="px-4 text-center font-mono text-[11px] uppercase tracking-widest text-cyan-300/60">
        {label}
      </span>
    </div>
  );
}