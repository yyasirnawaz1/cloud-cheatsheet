import type { ViewId } from '../types';
import type { Theme } from '../hooks/useTheme';

interface HeaderProps {
  view: ViewId;
  onView: (v: ViewId) => void;
  query: string;
  onQuery: (q: string) => void;
  understoodCount: number;
  totalSides: number;
  resultCount: number;
  theme: Theme;
  onToggleTheme: () => void;
}

const views: { id: ViewId; label: string; hint: string }[] = [
  { id: 'split', label: 'Split View', hint: 'Azure ⇄ AWS side by side' },
  { id: 'azure', label: 'Azure', hint: 'Azure services only' },
  { id: 'aws', label: 'AWS', hint: 'AWS services only' },
  { id: 'progress', label: 'My Progress', hint: 'Track what you have learned' },
  { id: 'sitemap', label: 'Sitemap', hint: 'Site structure & guide' },
];

export function Header({
  view,
  onView,
  query,
  onQuery,
  understoodCount,
  totalSides,
  resultCount,
  theme,
  onToggleTheme,
}: HeaderProps) {
  const pct = totalSides === 0 ? 0 : Math.round((understoodCount / totalSides) * 100);
  return (
    <header className="sticky top-0 z-40 border-b border-ink-800 bg-ink-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-azure to-aws text-lg font-black text-white shadow-lg ring-1 ring-white/10">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
                <path d="M4 15a3 3 0 0 1 .6-6 4.2 4.2 0 0 1 7.8-.9A3.2 3.2 0 0 1 12 15z" fill="currentColor" opacity="0.95" />
              </svg>
            </div>
            <div>
              <h1 className="text-base font-bold leading-tight text-slate-100">
                Cloud Cheat Sheet
                <span className="ml-2 hidden rounded border border-ink-700 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-400 sm:inline">
                  AZURE ⇄ AWS
                </span>
              </h1>
              <p className="text-[11px] text-slate-500">
                Enterprise cloud service reference &amp; learning tracker
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-lg border border-ink-700 bg-ink-850/80 px-3 py-1.5 sm:flex">
              <span className="text-emerald-400" aria-hidden>
                ✓
              </span>
              <span className="text-xs text-slate-300">
                {understoodCount}/{totalSides} learned
              </span>
              <div className="h-1.5 w-20 overflow-hidden rounded-full bg-ink-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-emerald-400">{pct}%</span>
            </div>

            <button
              type="button"
              onClick={onToggleTheme}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="no-print flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 bg-ink-850/80 text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100"
            >
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
              🔍
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              placeholder="Search services, e.g. 'lambda', 'kubernetes', 'concurrency', 'queue'…"
              className="w-full rounded-lg border border-ink-700 bg-ink-850/80 py-2 pl-9 pr-24 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
            {query && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                {resultCount} match{resultCount === 1 ? '' : 'es'}
              </span>
            )}
          </div>

          <nav className="no-print flex flex-wrap gap-1 rounded-lg border border-ink-800 bg-ink-850/60 p-1">
            {views.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => onView(v.id)}
                title={v.hint}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  view === v.id
                    ? 'bg-brand text-white shadow-sm'
                    : 'text-slate-300 hover:bg-ink-800 hover:text-slate-100'
                }`}
              >
                {v.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
