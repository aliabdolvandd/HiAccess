"use client";

import { useEffect, useState } from "react";

const SEARCH_HISTORY_KEY = "search-history";

export const useSearchHistory = () => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const StoredHistory = JSON.parse(
      localStorage.getItem(SEARCH_HISTORY_KEY) || "[]"
    );
    setHistory(StoredHistory);
  }, []);

  const addHistory = (query: string) => {
    if (!query || history.includes(query)) return;

    const newHistory = [query, ...history].slice(0, 10);
    setHistory(newHistory);
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(newHistory));
  };

  const removeFromHistory = (query: string) => {
    const newHistory = history.filter((item) => item !== query);
    setHistory(newHistory);
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(SEARCH_HISTORY_KEY);
  };

  return { history, addHistory, removeFromHistory, clearHistory };
};
