import Link from "next/link";

interface Props {
  filtered: boolean;
  clearHref: string;
}

export default function EmptyState({ filtered, clearHref }: Props) {
  return (
    <section className="top_sec">
      <div className="container">
        <div className="happen_empty">
          {filtered ? (
            <>
              <h3>No results found</h3>
              <p>Try changing or clearing the filters.</p>
              <Link href={clearHref} className="submit_btn">
                Clear filters
              </Link>
            </>
          ) : (
            <>
              <h3>Nothing published yet</h3>
              <p>New items will appear here soon.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
