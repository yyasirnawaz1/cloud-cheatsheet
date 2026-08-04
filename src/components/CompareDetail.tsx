import { useEffect } from 'react';
import type { CloudId, CloudService, ServiceMapping } from '../data/types';
import { categoryMap } from '../data/categories';

interface CompareDetailProps {
  mapping: ServiceMapping;
  /** The side the user clicked — highlighted as the focus. */
  focusCloud: CloudId;
  isUnderstood: (cloud: CloudId, mappingId: string) => boolean;
  onToggle: (cloud: CloudId, mappingId: string) => void;
  onClose: () => void;
}

const cloudMeta: Record<CloudId, { label: string; accent: string; border: string; text: string }> = {
  azure: {
    label: 'Microsoft Azure',
    accent: 'from-azure/25 to-transparent',
    border: 'border-azure/50',
    text: 'text-sky-300',
  },
  aws: {
    label: 'Amazon Web Services',
    accent: 'from-aws/25 to-transparent',
    border: 'border-aws/50',
    text: 'text-amber-300',
  },
};

function CloudPanel({
  cloud,
  service,
  focused,
  understood,
  onToggle,
}: {
  cloud: CloudId;
  service: CloudService;
  focused: boolean;
  understood: boolean;
  onToggle: () => void;
}) {
  const meta = cloudMeta[cloud];
  return (
    <section
      className={`flex flex-1 flex-col rounded-xl border bg-slate-900/70 ${
        focused ? meta.border : 'border-slate-700/60'
      } ${focused ? 'ring-1 ring-inset' : ''} overflow-hidden`}
    >
      <header className={`bg-gradient-to-b ${meta.accent} px-4 py-3`}>
        <div className="flex items-center justify-between gap-2">
          <span className={`text-[11px] font-semibold uppercase tracking-wider ${meta.text}`}>
            {meta.label}
          </span>
          {service.free && (
            <span className="rounded border border-emerald-500/40 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-300">
              Free tier
            </span>
          )}
        </div>
        <h3 className="mt-1 text-lg font-bold text-slate-50">{service.name}</h3>
        <p className={`text-xs ${meta.text}`}>{service.tagline}</p>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <p className="text-sm leading-relaxed text-slate-200">{service.description}</p>

        <div>
          <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-amber-300/90">
            <span aria-hidden>⚠</span> Ecosystem limitations
          </h4>
          <ul className="space-y-1.5">
            {service.limitations.map((lim, i) => (
              <li key={i} className="flex gap-2 text-xs leading-relaxed text-slate-300">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-amber-400/70" />
                <span>{lim}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <a
            href={service.docsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs font-medium text-slate-300 underline decoration-slate-600 underline-offset-2 hover:text-slate-100"
          >
            Official docs ↗
          </a>
          <button
            type="button"
            onClick={onToggle}
            aria-pressed={understood}
            className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors ${
              understood
                ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25'
                : 'border-slate-600/70 bg-slate-800/60 text-slate-300 hover:border-slate-500 hover:text-slate-100'
            }`}
          >
            <span aria-hidden>{understood ? '✓' : '○'}</span>
            {understood ? 'Understood' : 'Mark as read'}
          </button>
        </div>
      </div>
    </section>
  );
}

export function CompareDetail({
  mapping,
  focusCloud,
  isUnderstood,
  onToggle,
  onClose,
}: CompareDetailProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const cat = categoryMap[mapping.category];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Comparison: ${mapping.concept}`}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between gap-4 border-b border-slate-800 px-5 py-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
              {cat?.icon} {cat?.name}
            </p>
            <h2 className="text-xl font-bold text-slate-50">{mapping.concept}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-700 px-2.5 py-1 text-sm text-slate-400 hover:bg-slate-800 hover:text-slate-100"
            aria-label="Close comparison"
          >
            Esc ✕
          </button>
        </header>

        <div className="flex flex-col gap-4 overflow-y-auto p-5 md:flex-row">
          <CloudPanel
            cloud="azure"
            service={mapping.azure}
            focused={focusCloud === 'azure'}
            understood={isUnderstood('azure', mapping.id)}
            onToggle={() => onToggle('azure', mapping.id)}
          />
          <div className="flex items-center justify-center py-1 md:flex-col">
            <span className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              vs
            </span>
          </div>
          <CloudPanel
            cloud="aws"
            service={mapping.aws}
            focused={focusCloud === 'aws'}
            understood={isUnderstood('aws', mapping.id)}
            onToggle={() => onToggle('aws', mapping.id)}
          />
        </div>
      </div>
    </div>
  );
}
