"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Category } from "@/types/product";
import type { Locale } from "@/i18n/config";

export function ProductFilters({
  locale,
  categories,
  labels,
}: {
  locale: Locale;
  categories: Category[];
  labels: {
    searchPlaceholder: string;
    searchLabel: string;
    all: string;
  };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const activeCategory = searchParams.get("category") ?? "all";

  function updateParams(next: { q?: string; category?: string }) {
    const params = new URLSearchParams(searchParams.toString());

    if (next.q !== undefined) {
      if (next.q) params.set("q", next.q);
      else params.delete("q");
    }

    if (next.category !== undefined) {
      if (next.category && next.category !== "all") {
        params.set("category", next.category);
      } else {
        params.delete("category");
      }
    }

    const queryString = params.toString();
    startTransition(() => {
      const shopPath = `/${locale}/shop`;
      router.push(queryString ? `${shopPath}?${queryString}` : shopPath);
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          updateParams({ q: query });
        }}
        className="relative w-full max-w-md"
      >
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={labels.searchPlaceholder}
          className="pl-9"
          aria-label={labels.searchLabel}
        />
      </form>

      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          size="sm"
          variant={activeCategory === "all" ? "default" : "outline"}
          className={cn(activeCategory === "all" && "bg-violet-dark text-white")}
          onClick={() => updateParams({ category: "all" })}
        >
          {labels.all}
        </Button>
        {categories.map((category) => (
          <Button
            key={category.slug}
            type="button"
            size="sm"
            variant={activeCategory === category.slug ? "default" : "outline"}
            className={cn(
              activeCategory === category.slug && "bg-violet-dark text-white"
            )}
            onClick={() => updateParams({ category: category.slug })}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
