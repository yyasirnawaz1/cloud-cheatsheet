import type { CategoryId, ServiceMapping } from '../data/types';
import { categories } from '../data/categories';
import type { ViewId } from '../types';

interface SitemapViewProps {
  mappings: ServiceMapping[];
  onGoto: (view: ViewId, category?: CategoryId) => void;
}

export function SitemapView({ mappings, onGoto }: SitemapViewProps) {
  const pages: { view: ViewId; title: string; desc: string }[] = [
    { view: 'split', title: 'Split View (home)', desc: 'Azure and AWS side by side, grouped by category. The default educational layout.' },
    { view: 'azure', title: 'Azure', desc: 'Browse Azure services only. Click any tile to reveal its AWS counterpart.' },
    { view: 'aws', title: 'AWS', desc: 'Browse AWS services only. Click any tile to reveal its Azure counterpart.' },
    { view: 'progress', title: 'My Progress', desc: 'Track which services you have marked as understood, per cloud and category.' },
    { view: 'sitemap', title: 'Sitemap', desc: 'This page — the full structure of the cheat sheet.' },
  ];

  return (
    <div className="space-y-10">
      <section>
        <h2 className="mb-2 text-xl font-bold text-slate-100">How to use this cheat sheet</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Guide n="1" title="Compare side by side" text="The default Split View lines up each Azure service directly across from its AWS equivalent, grouped by category." />
          <Guide n="2" title="Hover for descriptions" text="Hover any tile to see a plain-English description and a heads-up on how many limitations it has." />
          <Guide n="3" title="Click for deep detail" text="Click a tile to open a full comparison: descriptions, ecosystem limitations (e.g. Lambda vs Functions concurrency), and docs links." />
          <Guide n="4" title="Track your learning" text="Mark any service as 'understood' to turn it green. Your progress is saved in your browser and shown on the Progress page." />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-slate-100">Pages</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((p) => (
            <button
              key={p.view}
              type="button"
              onClick={() => onGoto(p.view)}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-left transition-colors hover:border-slate-600 hover:bg-slate-900"
            >
              <p className="font-semibold text-slate-100">{p.title}</p>
              <p className="mt-1 text-sm text-slate-400">{p.desc}</p>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-slate-100">
          Categories <span className="text-slate-400">({categories.length})</span>
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const items = mappings.filter((m) => m.category === cat.id);
            if (items.length === 0) return null;
            return (
              <div key={cat.id} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <button
                  type="button"
                  onClick={() => onGoto('split', cat.id)}
                  className="flex w-full items-center gap-2 text-left"
                >
                  <span className="text-xl" aria-hidden>
                    {cat.icon}
                  </span>
                  <span className="font-semibold text-slate-100">{cat.name}</span>
                  <span className="ml-auto rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-400">
                    {items.length}
                  </span>
                </button>
                <ul className="mt-2 space-y-1">
                  {items.map((m) => (
                    <li key={m.id} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="truncate text-sky-300">{m.azure.name}</span>
                      <span className="text-slate-600">⇄</span>
                      <span className="truncate text-amber-300">{m.aws.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
        <p>
          {mappings.length} concept mappings · {mappings.length * 2} services · Inspired by{' '}
          <a
            href="https://azurecheatsheet.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline hover:text-slate-300"
          >
            azurecheatsheet.com
          </a>
        </p>
      </footer>
    </div>
  );
}

function Guide({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-azure to-aws text-sm font-bold text-white">
        {n}
      </span>
      <div>
        <p className="font-semibold text-slate-100">{title}</p>
        <p className="mt-0.5 text-sm text-slate-400">{text}</p>
      </div>
    </div>
  );
}
