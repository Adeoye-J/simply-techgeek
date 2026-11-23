export default function Eyebrow({ children, live = false, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-c1/[.12] px-3 py-1.5 text-[.85rem] font-semibold text-c1 ${className}`}
    >
      {live && <i className="h-2 w-2 animate-pulse-ring rounded-full bg-c5" />}
      {children}
    </span>
  );
}