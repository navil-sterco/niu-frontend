"use client";

import { useRef, useState } from "react";
import SectionTitle from "@/components/common/SectionTitle";
import type { FilterValues, HappeningItem, PageResult } from "@/types/happenings";
import StoryCard from "@/components/happenings/StoryCard";

interface Props {
  tab: string;
  title: string;
  initialItems: HappeningItem[];
  total: number;
  pageSize: number;
  filters: FilterValues;
  linkable: boolean;
}

const CHUNK = 7;

export default function StoryList({ tab, title, initialItems, total, pageSize, filters, linkable }: Props) {
  const [items, setItems] = useState(initialItems);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const busy = useRef(false); 
  const hasMore = items.length < total;

  const loadMore = async () => {
    if (busy.current || !hasMore) return;
    busy.current = true;
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({ tab, page: String(page + 1), ...filters });
      const res = await fetch(`/api/happenings?${params}`);
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const data = (await res.json()) as PageResult;
      setItems((prev) => {
        const seen = new Set(prev.map((i) => i.id));
        return [...prev, ...data.items.filter((i) => !seen.has(i.id))];
      });
      setPage(data.page);
    } catch (e) {
      console.error(e);
      setError("Couldn’t load more items. Please try again.");
    } finally {
      busy.current = false;
      setLoading(false);
    }
  };

  const chunks: HappeningItem[][] = [];
  for (let i = 0; i < items.length; i += CHUNK) chunks.push(items.slice(i, i + CHUNK));

  return (
    <section className="news_sec">
      <div className="container">
        <SectionTitle>{title}</SectionTitle>

        {chunks.map((chunk, c) => {
          const first = chunk.slice(0, 3);
          const second = chunk.slice(3);
          return (
            <div key={c} className="news_chunk">
              <div className="news_sec_grid1">
                {first.map((item, i) => (
                  <StoryCard key={item.id} item={item} variant={i === 0 ? "overlay" : "list-arrow"} linkable={linkable} />
                ))}
              </div>
              {second.length > 0 && (
                <div className="news_sec_grid2">
                  {second.map((item) => (
                    <StoryCard key={item.id} item={item} variant="list" linkable={linkable} />
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <div className="nsload_more" aria-live="polite">
          {error && <p className="load_error">{error}</p>}
          {hasMore && (
            <a
              href="#"
              role="button"
              className="loadmore_links"
              aria-disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                loadMore();
              }}
            >
              {loading ? "Loading…" : error ? "Try again" : "Load More"}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
