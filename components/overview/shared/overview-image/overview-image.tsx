import Image from "next/image";
import type { OverviewImage } from "@/types/overview-types";

interface OverviewImageViewProps {
  image?: OverviewImage | null;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function OverviewImageView({
  image,
  className,
  sizes,
  priority,
}: OverviewImageViewProps) {
  if (!image?.src) return null;
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
