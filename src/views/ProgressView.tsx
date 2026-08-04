import type { CloudId, ServiceMapping } from '../data/types';
import { categories, categoryMap } from '../data/categories';
import type { ProgressApi } from '../hooks/useProgress';

interface ProgressViewProps {
  mappings: ServiceMapping[];
  progress: ProgressApi;
  onOpen: (mapping: ServiceMapping, cloud: CloudId) => void;
}

function Bar({ value, max }: { value: number; max: number }) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-16 text-right text-xs tabular-nums text-slate-400">
        {value}/{max}
      </span>
    </div>
  );
}

export function ProgressView({ mappings, progress, onOpen }: ProgressViewProps) {
  const totalSides = mappings.length * 2;
  const azureDone = mappings.filter((m) => progress.isUnderstood('azure', m.id)).length;
  const awsDone = mappings.filter((m) => progress.isUnderstood('aws', m.id)).length;

  const learned = mappings
    .flatMap((m) => {
      const out: { mapping: ServiceMapping; cloud: CloudId }[] = [];
      if (progress.isUnderstood('azure', m.id)) out.push({ mapping: m, cloud: 'azure' });
      if (progress.isUnderstood('aws', m.id)) out.push({ mapping: m, cloud: 'aws' });
      return out;
    })
    .sort((a, b) => a.mapping.concept.localeCompare(b.mapping.concept));

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Overall learned" value={progress.count} total={totalSides} accent="emerald" />
        <StatCard label="Azure services" value={azureDone} total={mappings.length} accent="azure" />
        <StatCard label="AWS services" value={awsDone} total={mappings.length} accent="aws" />
      </div>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-100">Progress by category</h2>
          {progress.count > 0 && (
            <button
              type="button"
              onClick={() => {
                if (confirm('Reset all learning progress? This cannot be undone.')) progress.reset();
              }}
              className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-300 hover:bg-red-500/20"
            >
              Reset progress
            </button>
          )}
        </div>
        <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
          {categories.map((cat) => {
            const items = mappings.filter((m) => m.category === cat.id);
            if (items.length === 0) return null;
            const done =
              items.filter((m) => progress.isUnderstood('azure', m.id)).length +
              items.filter((m) => progress.isUnderstood('aws', m.id)).length;
            return (
              <div key={cat.id} className="grid grid-cols-1 gap-1 sm:grid-cols-[220px_1fr] sm:items-center">
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <span aria-hidden>{cat.icon}</span>
                  {cat.name}
                </div>
                <Bar value={done} max={items.length * 2} />
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold text-slate-100">
          Marked as understood <span className="text-slate-400">({learned.length})</span>
        </h2>
        {learned.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-700 py-12 text-center text-slate-400">
            <p>Nothing marked yet.</p>
            <p className="mt-1 text-sm">
              Open a service and hit <span className="text-emerald-300">✓ Mark as read</span> to start
              tracking what you understand.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {learned.map(({ mapping, cloud }) => {
              const s = mapping[cloud];
              return (
                <button
                  key={`${cloud}:${mapping.id}`}
                  type="button"
                  onClick={() => onOpen(mapping, cloud)}
                  className="flex items-center gap-2 rounded-lg border border-emerald-600/40 bg-emerald-950/20 px-3 py-2 text-left text-sm text-slate-200 hover:border-emerald-500 hover:bg-emerald-950/40"
                >
                  <span className="text-emerald-400" aria-hidden>
                    ✓
                  </span>
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${cloud === 'azure' ? 'bg-azure' : 'bg-aws'}`}
                  />
                  <span className="truncate">{s.name}</span>
                  <span className="ml-auto text-[10px] uppercase text-slate-500">
                    {categoryMap[mapping.category]?.icon}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  total,
  accent,
}: {
  label: string;
  value: number;
  total: number;
  accent: 'emerald' | 'azure' | 'aws';
}) {
  const pct = total === 0 ? 0 : Math.round((value / total) * 100);
  const ring =
    accent === 'emerald' ? 'text-emerald-400' : accent === 'azure' ? 'text-sky-400' : 'text-amber-400';
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <div className="mt-1 flex items-end justify-between">
        <p className="text-3xl font-bold text-slate-50">
          {value}
          <span className="text-base font-normal text-slate-500">/{total}</span>
        </p>
        <p className={`text-2xl font-bold ${ring}`}>{pct}%</p>
      </div>
    </div>
  );
}
