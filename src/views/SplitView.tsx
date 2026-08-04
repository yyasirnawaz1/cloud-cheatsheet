import type { CloudId, ServiceMapping } from '../data/types';
import { categories } from '../data/categories';
import { ServiceTile } from '../components/ServiceTile';
import { sideMatches } from '../lib/search';
import type { ProgressApi } from '../hooks/useProgress';

interface SplitViewProps {
  mappings: ServiceMapping[];
  query: string;
  progress: ProgressApi;
  onOpen: (mapping: ServiceMapping, cloud: CloudId) => void;
}

export function SplitView({ mappings, query, progress, onOpen }: SplitViewProps) {
  const byCategory = categories
    .map((cat) => ({ cat, items: mappings.filter((m) => m.category === cat.id) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="space-y-8">
      {/* Column headers */}
      <div className="sticky top-[132px] z-20 grid grid-cols-2 gap-3 rounded-xl border border-slate-800 bg-slate-950/80 p-2 backdrop-blur md:top-[112px]">
        <div className="flex items-center gap-2 px-2">
          <span className="h-2.5 w-2.5 rounded-full bg-azure" />
          <span className="text-sm font-bold text-sky-300">Microsoft Azure</span>
        </div>
        <div className="flex items-center gap-2 px-2">
          <span className="h-2.5 w-2.5 rounded-full bg-aws" />
          <span className="text-sm font-bold text-amber-300">Amazon Web Services</span>
        </div>
      </div>

      {byCategory.map(({ cat, items }) => (
        <section key={cat.id} id={`cat-${cat.id}`} className="scroll-mt-40">
          <div className="mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
            <span className="text-xl" aria-hidden>
              {cat.icon}
            </span>
            <h2 className="text-lg font-bold text-slate-100">{cat.name}</h2>
            <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-400">
              {items.length}
            </span>
            <p className="ml-2 hidden text-xs text-slate-500 lg:block">{cat.description}</p>
          </div>

          <div className="space-y-3">
            {items.map((m) => (
              <div key={m.id} className="grid grid-cols-2 gap-3">
                <ServiceTile
                  service={m.azure}
                  cloud="azure"
                  understood={progress.isUnderstood('azure', m.id)}
                  onToggle={() => progress.toggle('azure', m.id)}
                  onOpen={() => onOpen(m, 'azure')}
                  dimmed={!!query && !sideMatches(m, 'azure', query)}
                />
                <ServiceTile
                  service={m.aws}
                  cloud="aws"
                  understood={progress.isUnderstood('aws', m.id)}
                  onToggle={() => progress.toggle('aws', m.id)}
                  onOpen={() => onOpen(m, 'aws')}
                  dimmed={!!query && !sideMatches(m, 'aws', query)}
                />
              </div>
            ))}
          </div>
        </section>
      ))}

      {byCategory.length === 0 && <EmptyState />}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-slate-700 py-16 text-center text-slate-400">
      <p className="text-lg">No services match your search.</p>
      <p className="mt-1 text-sm">Try a different keyword like “cache”, “kubernetes”, or “timeout”.</p>
    </div>
  );
}
