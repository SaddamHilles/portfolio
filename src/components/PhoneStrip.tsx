import Image from "next/image";
import { cn } from "@/lib/utils";

type PhoneStripProps = {
  images: string[];
  alt: string;
  className?: string;
};

export function PhoneStrip({ images, alt, className }: PhoneStripProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-end justify-center gap-2 overflow-hidden px-4 pt-8 sm:gap-4 sm:px-8 sm:pt-10",
        className,
      )}
    >
      {images.map((src, index) => (
        <div
          key={src}
          className="relative aspect-[9/19] w-[22%] max-w-[180px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-black shadow-[0_24px_50px_rgba(0,0,0,0.45)]"
        >
          <Image
            src={src}
            alt={`${alt} screen ${index + 1}`}
            fill
            className="object-cover object-top"
            sizes="180px"
          />
        </div>
      ))}
    </div>
  );
}

type PhoneGridProps = {
  images: string[];
  alt: string;
};

export function PhoneGrid({ images, alt }: PhoneGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
      {images.map((src, index) => (
        <div
          key={src}
          className="relative aspect-[9/19] overflow-hidden rounded-[1.6rem] border border-line bg-black"
        >
          <Image
            src={src}
            alt={`${alt} screen ${index + 1}`}
            fill
            className="object-cover object-top"
            sizes="(min-width: 640px) 22vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}
