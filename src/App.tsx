import { useMemo, useState } from 'react';
import type { CategoryId, CloudId, ServiceMapping } from './data/types';
import { mappings as allMappings } from './data';
import { categories } from './data/categories';
import { matchesQuery } from './lib/search';
import { useProgress } from './hooks/useProgress';
import type { ViewId } from './types';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { CompareDetail } from './components/CompareDetail';
import { SplitView } from './views/SplitView';
import { CloudView } from './views/CloudView';
import { ProgressView } from './views/ProgressView';
import { SitemapView } from './views/SitemapView';

interface Selection {
  mapping: ServiceMapping;
  cloud: CloudId;
}

export default function App() {
  const [view, setView] = useState<ViewId>('split');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryId | 'all'>('all');
  const [selection, setSelection] = useState<Selection | null>(null);
  const progress = useProgress();

  const queryFiltered = useMemo(
    () => allMappings.filter((m) => matchesQuery(m, query)),
    [query],
  );

  const filtered = useMemo(
    () => (category === 'all' ? queryFiltered : queryFiltered.filter((m) => m.category === category)),
    [queryFiltered, category],
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const m of queryFiltered) c[m.category] = (c[m.category] ?? 0) + 1;
    return c;
  }, [queryFiltered]);

  const totalSides = allMappings.length * 2;

  const openDetail = (mapping: ServiceMapping, cloud: CloudId) => setSelection({ mapping, cloud });

  const goto = (v: ViewId, cat?: CategoryId) => {
    setView(v);
    if (cat) {
      setCategory(cat);
      requestAnimationFrame(() => {
        document.getElementById(`cat-${cat}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  const showFilters = view === 'split' || view === 'azure' || view === 'aws';

  const renderView = () => {
    switch (view) {
      case 'split':
        return <SplitView mappings={filtered} query={query} progress={progress} onOpen={openDetail} />;
      case 'azure':
        return (
          <CloudView cloud="azure" mappings={filtered} query={query} progress={progress} onOpen={openDetail} />
        );
      case 'aws':
        return (
          <CloudView cloud="aws" mappings={filtered} query={query} progress={progress} onOpen={openDetail} />
        );
      case 'progress':
        return <ProgressView mappings={allMappings} progress={progress} onOpen={openDetail} />;
      case 'sitemap':
        return <SitemapView mappings={allMappings} onGoto={goto} />;
      default: {
        const _exhaustive: never = view;
        return _exhaustive;
      }
    }
  };

  return (
    <div className="min-h-full">
      <Header
        view={view}
        onView={setView}
        query={query}
        onQuery={setQuery}
        understoodCount={progress.count}
        totalSides={totalSides}
        resultCount={queryFiltered.length}
      />

      <main className="mx-auto max-w-7xl px-4 py-6">
        {showFilters && (
          <div className="mb-6">
            <CategoryFilter
              categories={categories}
              active={category}
              counts={counts}
              onSelect={setCategory}
            />
          </div>
        )}
        {renderView()}
      </main>

      {selection && (
        <CompareDetail
          mapping={selection.mapping}
          focusCloud={selection.cloud}
          isUnderstood={progress.isUnderstood}
          onToggle={progress.toggle}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
