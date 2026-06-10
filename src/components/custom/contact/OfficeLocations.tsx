// OfficeLocations.tsx

import { offices } from "@/data/contact";
import { MapPin } from "lucide-react";

export default function OfficeLocations() {
  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="text-xl font-semibold">
        Our offices
      </h3>

      <div className="mt-5 space-y-4">
        {offices.map((office) => (
          <div
            key={office.city}
            className="rounded-lg bg-muted/50 p-4"
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />

              <h4 className="font-semibold">
                {office.city}
              </h4>

              {office.tag && (
                <span className="rounded-full bg-primary px-2 py-1 text-xs text-white">
                  {office.tag}
                </span>
              )}
            </div>

            <div className="mt-2 text-sm text-muted-foreground">
              {office.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}