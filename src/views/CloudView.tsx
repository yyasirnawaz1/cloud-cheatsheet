import type { CloudId, ServiceMapping } from '../data/types';
import { categories } from '../data/categories';
import { ServiceTile } from '../components/ServiceTile';
import { sideMatches } from '../lib/search';
import type { ProgressApi } from '../hooks/useProgress';

interface CloudViewProps {
  cloud: CloudId;
  mappings: ServiceMapping[];
  query: string;
  progress: ProgressApi;
  onOpen: (mapping: ServiceMapping, cloud: CloudId) => void;
}

export function CloudView({ cloud, mappings, query, progress, onOpen }: CloudViewProps) {
  const byCategory = categories
    .map((cat) => ({ cat, items: mappings.filter((m) => m.category === cat.id) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
        <p className="text-sm text-slate-300">
          Showing <span className="font-semibold text-slate-100">{cloud === 'azure' ? 'Microsoft Azure' : 'Amazon Web Services'}</span>{' '}
          services. Click any tile to open the side-by-side comparison with its{' '}
          {cloud === 'azure' ? 'AWS' : 'Azure'} counterpart.
        </p>
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
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((m) => (
              <ServiceTile
                key={m.id}
                service={m[cloud]}
                cloud={cloud}
                understood={progress.isUnderstood(cloud, m.id)}
                onToggle={() => progress.toggle(cloud, m.id)}
                onOpen={() => onOpen(m, cloud)}
                dimmed={!!query && !sideMatches(m, cloud, query)}
              />
            ))}
          </div>
        </section>
      ))}

      {byCategory.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-700 py-16 text-center text-slate-400">
          <p className="text-lg">No services match your search.</p>
        </div>
      )}
    </div>
  );
}
