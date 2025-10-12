import { sisterConcernsData } from "@/data/content";
import Image from "next/image";
import Link from "next/link";

export function SisterConcernLogos() {
  return (
    // UPDATE: The semi-transparent, round-cornered frame is now on this single outer container.
    <div className="w-full rounded-2xl bg-theme-background-alt/20 p-4 backdrop-blur-md shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sisterConcernsData.map((concern) => (
          // The individual link is now transparent.
          <Link
            key={concern.id}
            href={`/concern/${concern.slug}`}
            className="flex h-16 items-center justify-center transition-opacity hover:opacity-75"
          >
            {concern.logoSrc ? (
              <Image
                src={concern.logoSrc}
                alt={`${concern.name} logo`}
                width={120}
                height={60}
                className="h-full w-auto object-contain"
              />
            ) : (
              <div className="text-center font-semibold text-theme-primary">
                {concern.name}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}