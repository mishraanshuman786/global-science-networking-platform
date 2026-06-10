// ContactCategoryCards.tsx

import { contactCategories } from "@/data/contact";

export default function ContactCategoryCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {contactCategories.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className={`
              rounded-xl border bg-white p-6 text-center
              transition-all
              ${
                item.active
                  ? "border-primary shadow-sm"
                  : ""
              }
            `}
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <Icon className="h-5 w-5 text-primary" />
            </div>

            <h3 className="mt-4 font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}