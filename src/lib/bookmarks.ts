"use client";

import { useEffect, useState, useCallback } from "react";

export interface SavedItem {
  type: "technology" | "ai-tool" | "roadmap" | "project" | "interview" | "career";
  slug: string;
  title: string;
  url: string;
  category?: string;
}

const KEY = "techverse:bookmarks";

/** SSR-safe localStorage state. Returns [value, setValue, loaded]. */
export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw != null) setValue(JSON.parse(raw) as T);
    } catch {
      /* ignore */
    }
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const set = useCallback(
    (v: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const next = typeof v === "function" ? (v as (p: T) => T)(prev) : v;
        try {
          localStorage.setItem(key, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return next;
      });
    },
    [key]
  );

  return [value, set, loaded] as const;
}

/** Track which interview questions the user has marked as "known" (practice mode). */
export function useKnown() {
  const [ids, setIds, loaded] = useLocalStorage<string[]>("techverse:known", []);
  const isKnown = useCallback((slug: string) => ids.includes(slug), [ids]);
  const toggle = useCallback(
    (slug: string) =>
      setIds((prev) => (prev.includes(slug) ? prev.filter((x) => x !== slug) : [...prev, slug])),
    [setIds]
  );
  return { ids, isKnown, toggle, loaded };
}

export function useBookmarks() {
  const [items, setItems, loaded] = useLocalStorage<SavedItem[]>(KEY, []);

  const isSaved = useCallback((url: string) => items.some((i) => i.url === url), [items]);

  const toggle = useCallback(
    (item: SavedItem) =>
      setItems((prev) =>
        prev.some((i) => i.url === item.url)
          ? prev.filter((i) => i.url !== item.url)
          : [item, ...prev]
      ),
    [setItems]
  );

  const remove = useCallback(
    (url: string) => setItems((prev) => prev.filter((i) => i.url !== url)),
    [setItems]
  );

  return { items, isSaved, toggle, remove, loaded };
}
