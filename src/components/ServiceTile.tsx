import type { CloudId, CloudService } from '../data/types';

interface ServiceTileProps {
  service: CloudService;
  cloud: CloudId;
  understood: boolean;
  onToggle: () => void;
  onOpen: () => void;
  /** Dim tiles that don't match the current search. */
  dimmed?: boolean;
}

const cloudStyles: Record<
  CloudId,
  { ring: string; label: string; dot: string; rail: string }
> = {
  azure: {
    ring: 'hover:border-azure/50',
    label: 'text-slate-400',
    dot: 'bg-azure',
    rail: 'before:bg-azure',
  },
  aws: {
    ring: 'hover:border-aws/50',
    label: 'text-slate-400',
    dot: 'bg-aws',
    rail: 'before:bg-aws',
  },
};

export function ServiceTile({
  service,
  cloud,
  understood,
  onToggle,
  onOpen,
  dimmed,
}: ServiceTileProps) {
  const s = cloudStyles[cloud];
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-[10px] border bg-ink-850/80 p-3 pl-3.5 text-left shadow-sm transition-all duration-200 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:opacity-70 before:content-[''] ${
        s.rail
      } ${s.ring} hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 ${
        dimmed ? 'opacity-30' : 'opacity-100'
      } ${understood ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-ink-700'}`}
    >
      <button
        type="button"
        onClick={onOpen}
        className="flex-1 cursor-pointer text-left outline-none"
        aria-label={`Open comparison for ${service.name}`}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 shrink-0 rounded-full ${s.dot}`} />
            <span className="text-sm font-semibold leading-tight text-slate-100">
              {service.name}
            </span>
          </div>
          {service.free && (
            <span className="shrink-0 rounded border border-emerald-500/40 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-300">
              Free tier
            </span>
          )}
        </div>
        <p className={`mt-1 text-xs ${s.label}`}>{service.tagline}</p>
      </button>

      {/* Understood toggle */}
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={understood}
        title={understood ? 'Marked as understood — click to unmark' : 'Mark as understood'}
        className={`mt-2 flex items-center gap-1.5 self-start rounded-md border px-2 py-1 text-[11px] font-medium transition-colors ${
          understood
            ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25'
            : 'border-slate-600/70 bg-slate-800/60 text-slate-400 hover:border-slate-500 hover:text-slate-200'
        }`}
      >
        <span aria-hidden className={understood ? '' : 'opacity-60'}>
          {understood ? '✓' : '○'}
        </span>
        {understood ? 'Understood' : 'Mark as read'}
      </button>

      {/* Hover description tooltip */}
      <div className="pointer-events-none absolute left-1/2 top-full z-30 mt-2 w-72 -translate-x-1/2 rounded-lg border border-slate-600 bg-slate-950/95 p-3 text-xs text-slate-200 opacity-0 shadow-2xl transition-opacity duration-150 group-hover:opacity-100">
        <p className="mb-1 font-semibold text-slate-100">{service.name}</p>
        <p className="text-slate-300">{service.description}</p>
        {service.limitations.length > 0 && (
          <p className="mt-2 text-[11px] text-amber-300/90">
            ⚠ {service.limitations.length} known limitation
            {service.limitations.length > 1 ? 's' : ''} — click to view
          </p>
        )}
      </div>
    </div>
  );
}
