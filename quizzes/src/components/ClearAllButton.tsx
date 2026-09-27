'use client';

import { useState } from 'react';

const QUIZ_STORAGE_KEY = /-(guessed|gamestate|hints)$/;

export function ClearAllButton() {
  const [cleared, setCleared] = useState(false);

  const handleClear = () => {
    if (!window.confirm('Clear all saved quiz progress?')) return;

    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i += 1) {
        const key = localStorage.key(i);
        if (key && QUIZ_STORAGE_KEY.test(key)) keysToRemove.push(key);
      }
      keysToRemove.forEach(key => localStorage.removeItem(key));
      setCleared(true);
      window.setTimeout(() => setCleared(false), 2000);
    } catch {
      /* Ignore unavailable browser storage. */
    }
  };

  return (
    <button
      type="button"
      onClick={handleClear}
      className="text-xs text-gray-400 border border-gray-300 rounded px-2 py-1 hover:text-red-600 hover:border-red-300 hover:bg-red-50"
    >
      {cleared ? 'Cleared' : 'Clear All'}
    </button>
  );
}
