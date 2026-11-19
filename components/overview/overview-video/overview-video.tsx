"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { getVideoEmbed } from "@/lib/overview/overview-utils";
import "@/components/overview/overview-video/overview-video.css";

interface OverviewVideoProps {
  url: string;
  title?: string | null;
}

export default function OverviewVideo({ url, title }: OverviewVideoProps) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const embed = useMemo(() => getVideoEmbed(url), [url]);
  const label = title?.trim() || "Video";

  const openBox = useCallback(() => {
    setFailed(false);
    setOpen(true);
  }, []);

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

  const trapFocus = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      "button, video[controls], iframe, [tabindex]:not([tabindex='-1'])",
    );
    if (!focusable || focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        className="play-btn"
        onClick={openBox}
        aria-haspopup="dialog"
      >
        Play Video
      </button>

      {open &&
        createPortal(
          <div className="ov_lightbox">
            <div className="ov_fade" onClick={close} aria-hidden="true" />
            <div
              className="ov_light"
              role="dialog"
              aria-modal="true"
              aria-label={label}
              ref={dialogRef}
              onKeyDown={trapFocus}
            >
              <button
                type="button"
                ref={closeRef}
                className="boxclose"
                onClick={close}
                aria-label="Close video"
              />
              {failed ? (
                <p className="ov_light_error" role="alert">
                  Sorry, this video could not be loaded.
                </p>
              ) : embed.kind === "iframe" ? (
                <iframe
                  src={embed.src}
                  title={label}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <video
                  controls
                  autoPlay
                  playsInline
                  src={embed.src}
                  onError={() => setFailed(true)}
                >
                  Your browser does not support video.
                </video>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
