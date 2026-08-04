import { useCallback, useEffect, useState } from 'react';
import type { CloudId } from '../data/types';

const STORAGE_KEY = 'cloud-cheatsheet.understood.v1';

/** A progress key uniquely identifies one cloud's side of a mapping. */
export type ProgressKey = `${CloudId}:${string}`;

export function makeKey(cloud: CloudId, mappingId: string): ProgressKey {
  return `${cloud}:${mappingId}`;
}

function load(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed)) return new Set(parsed.filter((x): x is string => typeof x === 'string'));
    return new Set();
  } catch {
    return new Set();
  }
}

function persist(set: Set<string>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch {
    /* storage unavailable — ignore */
  }
}

export interface ProgressApi {
  understood: Set<string>;
  isUnderstood: (cloud: CloudId, mappingId: string) => boolean;
  toggle: (cloud: CloudId, mappingId: string) => void;
  reset: () => void;
  count: number;
}

export function useProgress(): ProgressApi {
  const [understood, setUnderstood] = useState<Set<string>>(() => load());

  useEffect(() => {
    persist(understood);
  }, [understood]);

  // Keep multiple tabs in sync.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setUnderstood(load());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const isUnderstood = useCallback(
    (cloud: CloudId, mappingId: string) => understood.has(makeKey(cloud, mappingId)),
    [understood],
  );

  const toggle = useCallback((cloud: CloudId, mappingId: string) => {
    setUnderstood((prev) => {
      const next = new Set(prev);
      const key = makeKey(cloud, mappingId);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const reset = useCallback(() => setUnderstood(new Set()), []);

  return { understood, isUnderstood, toggle, reset, count: understood.size };
}
