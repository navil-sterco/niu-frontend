"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getVideoEmbed } from "@/lib/leadership/leadership-utils";
import "@/components/leadership/leadership-video/leadership-video.css";

interface LeadershipVideoProps {
  title: string;
  videoUrl?: string | null;
  thumbnail?: string | null;
  playIcon: string;
}

export default function LeadershipVideo({
  title,
  videoUrl,
  thumbnail,
  playIcon,
}: LeadershipVideoProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const embed = useMemo(() => (videoUrl ? getVideoEmbed(videoUrl) : null), [videoUrl]);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  if (!thumbnail && !embed) return null;

  return (
    <div className="ldrbtm_img">
      <figure>
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={`${title} video`}
            width={600}
            height={380}
            className="img-fluid w-100"
            sizes="(max-width: 991px) 100vw, 35vw"
          />
        ) : (
          <div className="vid_placeholder" aria-hidden="true" />
        )}

        {embed && (
          <>
            <Image
              src={playIcon}
              alt=""
              width={60}
              height={60}
              className="img-fluid vid_icons"
              aria-hidden="true"
            />
            <button
              type="button"
              ref={triggerRef}
              className="play-btn"
              onClick={() => setOpen(true)}
              aria-haspopup="dialog"
            >
              Play Video
            </button>
          </>
        )}
      </figure>

      {embed && open && (
        <>
          <div className="lead_fade" onClick={close} aria-hidden="true" />
          <div className="lead_light" role="dialog" aria-modal="true" aria-label={`${title} video`}>
            <button
              type="button"
              ref={closeRef}
              className="boxclose"
              onClick={close}
              aria-label="Close video"
            />
            {embed.kind === "iframe" ? (
              <iframe
                src={embed.src}
                title={`${title} video`}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <video controls autoPlay playsInline poster={thumbnail ?? undefined} src={embed.src}>
                Your browser does not support video.
              </video>
            )}
          </div>
        </>
      )}
    </div>
  );
}
