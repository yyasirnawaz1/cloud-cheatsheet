import type { Category, CategoryId } from '../data/types';

interface CategoryFilterProps {
  categories: Category[];
  active: CategoryId | 'all';
  counts: Record<string, number>;
  onSelect: (id: CategoryId | 'all') => void;
}

export function CategoryFilter({ categories, active, counts, onSelect }: CategoryFilterProps) {
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  return (
    <div className="no-print flex flex-wrap gap-1.5">
      <button
        type="button"
        onClick={() => onSelect('all')}
        className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
          active === 'all'
            ? 'border-slate-100 bg-slate-100 text-slate-900'
            : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:text-white'
        }`}
      >
        All <span className="opacity-60">{total}</span>
      </button>
      {categories.map((c) => {
        const n = counts[c.id] ?? 0;
        if (n === 0) return null;
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => onSelect(c.id)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              active === c.id
                ? 'border-slate-100 bg-slate-100 text-slate-900'
                : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:text-white'
            }`}
          >
            <span aria-hidden className="mr-1">
              {c.icon}
            </span>
            {c.name} <span className="opacity-60">{n}</span>
          </button>
        );
      })}
    </div>
  );
}
