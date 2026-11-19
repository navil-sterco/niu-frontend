import Image from "next/image";
import type { ProgramImage } from "@/types/program-details";

interface ProgramImageViewProps {
  image?: ProgramImage | null;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/** next/image wrapper that renders nothing when the image is missing. */
export default function ProgramImageView({
  image,
  className,
  sizes,
  priority,
}: ProgramImageViewProps) {
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