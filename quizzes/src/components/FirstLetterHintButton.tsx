'use client';

import { useEffect, useMemo, useState } from 'react';

export interface FirstLetterHintItem {
  answer: string;
  key?: string;
}

interface FirstLetterHintButtonProps {
  items: readonly (string | FirstLetterHintItem)[];
  guessed: ReadonlySet<string>;
  storageKey: string;
  disabled?: boolean;
}

function readHints(storageKey: string): string[] {
  if (typeof window === 'undefined') return [];

  try {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) as string[] : [];
  } catch {
    return [];
  }
}

export function FirstLetterHintButton({
  items,
  guessed,
  storageKey,
  disabled = false,
}: FirstLetterHintButtonProps) {
  const normalizedItems = useMemo(
    () => items.map((item, index) => typeof item === 'string'
      ? { answer: item, key: item, row: index + 1 }
      : { answer: item.answer, key: item.key ?? item.answer, row: index + 1 }),
    [items],
  );
  // Load persisted hints after hydration so saved client state never disagrees
  // with the server-rendered button.
  const [hintedKeys, setHintedKeys] = useState<string[]>([]);
  const hintedKeySet = new Set(hintedKeys);
  const visibleHintKey = [...hintedKeys].reverse().find(key => !guessed.has(key));
  const visibleHint = normalizedItems.find(item => item.key === visibleHintKey);
  const hasAvailableHint = normalizedItems.some(
    item => !guessed.has(item.key) && !hintedKeySet.has(item.key),
  );

  useEffect(() => {
    const storedHints = readHints(storageKey);
    setHintedKeys(current => {
      if (current.length === storedHints.length && current.every((key, index) => key === storedHints[index])) {
        return current;
      }
      return storedHints;
    });
  }, [guessed, storageKey]);

  const giveHint = () => {
    const available = normalizedItems.filter(
      item => !guessed.has(item.key) && !hintedKeySet.has(item.key),
    );
    if (available.length === 0) return;

    const item = available[Math.floor(Math.random() * available.length)];
    const next = [...hintedKeys, item.key];
    setHintedKeys(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); }
    catch { /* Progress still works when storage is unavailable. */ }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={giveHint}
        disabled={disabled || !hasAvailableHint}
        className="px-3 py-1.5 border border-amber-300 text-amber-700 text-sm rounded hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        First Letter Hint
      </button>
      <span className="min-w-16 text-sm font-medium text-amber-700" aria-live="polite">
        {visibleHint ? `#${visibleHint.row}: ${visibleHint.answer.charAt(0).toUpperCase()}…` : ''}
      </span>
    </div>
  );
}
