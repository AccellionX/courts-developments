"use client";

import { useMemo, useState } from "react";
import { DevelopmentCard } from "@/components/DevelopmentCard";
import {
  developmentFilters,
  developments,
  type DevelopmentType,
} from "@/lib/content";

type Filter = (typeof developmentFilters)[number];

export function DevelopmentsFilter() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (active === "All") return developments;
    return developments.filter((item) => item.type === (active as DevelopmentType));
  }, [active]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter developments"
      >
        {developmentFilters.map((filter) => {
          const selected = active === filter;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(filter)}
              className={`font-mono-label border px-4 py-2 text-[11px] uppercase tracking-[0.14em] transition ${
                selected
                  ? "border-ink bg-ink text-paper shadow-[0_0_24px_rgba(184,148,95,0.18)]"
                  : "border-border bg-paper/80 text-muted hover:border-bronze hover:text-ink"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <p className="font-mono-label mt-6 text-[11px] tracking-[0.12em] text-muted">
        Showing {filtered.length} illustrative{" "}
        {filtered.length === 1 ? "concept" : "concepts"}
        {active !== "All" ? ` · ${active}` : ""}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((development) => (
          <DevelopmentCard key={development.id} development={development} />
        ))}
      </div>
    </div>
  );
}
