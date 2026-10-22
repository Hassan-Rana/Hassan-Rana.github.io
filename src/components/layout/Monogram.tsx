import { profile } from '../../data/site';

/** The small "HR" logo mark. */
export function Monogram({ className = 'h-9 w-9 text-[1.05rem]' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex shrink-0 items-center justify-center rounded-[10px] border border-ink-600 bg-ink-850 font-display leading-none text-paper ${className}`}
    >
      <span className="translate-y-px">{profile.monogram}</span>
      <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-lime" />
    </span>
  );
}
