import { sisterConcernsData } from "@/data/content";
import Image from "next/image";

export function SisterConcernLogos() {
  return (
    <div className="w-full">
      {/* ADJUSTMENT: Reduced horizontal gap (gap-x) from 8 to 4 to prevent overflow on small screens */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">
        {sisterConcernsData.map((concern) => (
          <div key={concern.id} className="text-center">
            {concern.logoSrc ? (
              <Image
                src={concern.logoSrc}
                alt={`${concern.name} logo`}
                width={120}
                height={60}
                className="h-14 w-auto mx-auto object-contain"
              />
            ) : (
              <div className="h-14 flex items-center justify-center font-semibold text-theme-primary">
                {concern.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}