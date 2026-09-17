import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProductShot({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.6rem] border border-line bg-bg-elevated",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        unoptimized
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}
