import FilterBar from "@/components/filters/FilterBar";
import type { FilterField, FilterValues, TabConfig, TabData } from "@/types/happenings";
import EmptyState from "@/components/happenings/EmptyState";
import HeroSlider from "@/components/happenings/HeroSlider";
import StoryList from "@/components/happenings/StoryList";
import TopSection from "@/components/happenings/TopSection";

interface Props {
  config: TabConfig;
  data: TabData;
  fields: FilterField[];
  filters: FilterValues;
  basePath: string;
}

export default function TabView({ config, data, fields, filters, basePath }: Props) {
  const filterKey = JSON.stringify(filters); // remounts the form + list when the URL filters change
  const hasResults = data.top.length > 0 || data.list.length > 0;
  const filtered = Object.keys(filters).length > 0;

  return (
    <>
      {data.hero.length > 0 && <HeroSlider slides={data.hero} />}

      {fields.length > 0 && (
        <section className={`banner_form ${config.filterClass ?? ""}`.trim()}>
          <div className="container">
            <FilterBar key={filterKey} fields={fields} values={filters} />
          </div>
        </section>
      )}

      {!hasResults && <EmptyState filtered={filtered} clearHref={`${basePath}/${config.slug}`} />}

      {data.top.length > 0 && (
        <TopSection title={config.topTitle ?? "Top Stories"} items={data.top} linkable={!!config.linkItems} />
      )}

      {data.list.length > 0 && (
        <StoryList
          key={filterKey}
          tab={config.slug}
          title={config.listTitle ?? "More"}
          initialItems={data.list}
          total={data.total}
          pageSize={data.pageSize}
          filters={filters}
          linkable={!!config.linkItems}
        />
      )}
    </>
  );
}
