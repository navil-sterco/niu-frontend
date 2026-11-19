"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";
import { isRemoteImage } from "@/lib/images";
import type { HeaderImageAsset } from "@/types/header";

type Props = { image: HeaderImageAsset } & Omit<ImageProps, "src" | "alt" | "width" | "height">;

export default function HeaderImage({ image, className, ...rest }: Props) {
  const [failed, setFailed] = useState(false);

  useEffect(() => setFailed(false), [image.src]);
  if (failed) return null;

  return (
    <Image
      {...rest}
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className={className}
      unoptimized={rest.unoptimized || isRemoteImage(image.src)}
      onError={() => setFailed(true)}
    />
  );
}
