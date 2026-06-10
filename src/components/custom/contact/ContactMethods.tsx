// ContactMethods.tsx

import { contactMethods } from "@/data/contact";
import { Mail } from "lucide-react";

export default function ContactMethods() {
  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="text-xl font-semibold">
        Other ways to reach us
      </h3>

      <div className="mt-6 space-y-5">
        {contactMethods.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 border-b pb-4 last:border-0"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
              <Mail className="h-4 w-4 text-primary" />
            </div>

            <div>
              <h4 className="font-medium">
                {item.title}
              </h4>

              <p className="text-primary">
                {item.value}
              </p>

              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}