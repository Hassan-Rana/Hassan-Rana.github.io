import type { ReactNode } from 'react';
import type { Status } from '../../data/types';

const statusStyles: Record<Status, { label: string; className: string; dot: string }> = {
  completed: {
    label: 'Completed',
    className: 'border-ink-600 text-paper-muted',
    dot: 'bg-paper-muted',
  },
  ongoing: {
    label: 'Ongoing',
    className: 'border-lime/40 text-lime',
    dot: 'bg-lime',
  },
  planned: {
    label: 'Planned',
    className: 'border-ink-600 text-paper-muted',
    dot: 'border border-paper-muted bg-transparent',
  },
  placeholder: {
    label: 'Placeholder · details to confirm',
    className: 'border-amber/40 border-dashed text-amber',
    dot: 'bg-amber',
  },
};

export function StatusBadge({ status }: { status: Status }) {
  const s = statusStyles[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider ${s.className}`}
    >
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-ink-700 bg-ink-850 px-2 py-1 font-mono text-[11.5px] text-paper-muted">
      {children}
    </span>
  );
}

/** Small inline marker for things not yet confirmed. */
export function Unverified({ children = 'Unverified' }: { children?: ReactNode }) {
  return (
    <span className="ml-2 inline-flex items-center rounded border border-dashed border-amber/50 px-1.5 py-px align-middle font-mono text-[10px] uppercase tracking-wider text-amber">
      {children}
    </span>
  );
}
