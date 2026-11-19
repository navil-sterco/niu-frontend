import type {
  OverviewGallerySection,
  OverviewGalleryTile,
} from "@/types/overview-types";
import OverviewHtml from "@/components/overview/shared/overview-html/overview-html";
import OverviewImageView from "@/components/overview/shared/overview-image/overview-image";
import OverviewStats from "@/components/overview/shared/overview-stats/overview-stats";
import OverviewText from "@/components/overview/shared/overview-text/overview-text";
import OverviewVideo from "@/components/overview/overview-video/overview-video";
import { hasHtml, hasTextValue } from "@/lib/overview/overview-utils";
import "@/components/overview/overview-gallery/overview-gallery.css";

interface OverviewGalleryProps {
  data: OverviewGallerySection;
}

function GalleryTile({
  tile,
  sizes,
}: {
  tile: OverviewGalleryTile;
  sizes: string;
}) {
  return (
    <figure>
      <OverviewImageView
        image={tile.image}
        className="img-fluid w-100"
        sizes={sizes}
      />
      {(tile.stat || tile.icon) && (
        <figcaption>
          {tile.stat && <OverviewStats stats={[tile.stat]} />}
          <OverviewImageView image={tile.icon} className="img-fluid" />
        </figcaption>
      )}
      {tile.video && (
        <OverviewVideo url={tile.video.url} title={tile.video.title} />
      )}
    </figure>
  );
}

export default function OverviewGallery({ data }: OverviewGalleryProps) {
  const tertiary = (data.tertiary ?? []).slice(0, 2);
  const hasBand = hasTextValue(data.title) || hasHtml(data.descriptionHtml);
  const hasRight = Boolean(data.secondary) || tertiary.length > 0;
  const hasTiles = Boolean(data.primary) || hasRight;

  return (
    <section id={data.id} className="abt-images">
      {hasBand && (
        <div className="rooted">
          <div className="rooted_grp">
            <div className="container">
              <div className="abtcounter_grid">
                <h4>
                  <OverviewText text={data.title} />
                </h4>
                <div className="abtcounter_cont">
                  <OverviewHtml html={data.descriptionHtml} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {hasTiles && (
        <div
          className={
            hasRight && data.primary
              ? "abtimg_grid"
              : "abtimg_grid abtimg_grid--single"
          }
        >
          {data.primary && (
            <GalleryTile
              tile={data.primary}
              sizes="(max-width: 991px) 100vw, 50vw"
            />
          )}
          {hasRight && (
            <div className="abtright_grid">
              {data.secondary && (
                <GalleryTile
                  tile={data.secondary}
                  sizes="(max-width: 991px) 100vw, 50vw"
                />
              )}
              {tertiary.length > 0 && (
                <div className="abtright_two">
                  {tertiary.map((tile) => (
                    <GalleryTile
                      key={tile.id}
                      tile={tile}
                      sizes="(max-width: 575px) 100vw, 25vw"
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
