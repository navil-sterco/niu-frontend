"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";
import { isRemoteImage } from "@/lib/images";

const FALLBACK = "/images/placeholder.webp";
type Props = Omit<ImageProps, "src" | "alt"> & { src: string; alt: string };

export default function SafeImage({ src, alt, className, ...rest }: Props) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCurrent(src);
    setFailed(false);
  }, [src]);

  if (failed) return <span className={`img_placeholder ${className ?? ""}`.trim()} role="img" aria-label={alt} />;

  return (
    <Image
      {...rest}
      unoptimized={rest.unoptimized || isRemoteImage(current)}
      className={className}
      src={current}
      alt={alt}
      onError={() => (current !== FALLBACK ? setCurrent(FALLBACK) : setFailed(true))}
    />
  );
}
