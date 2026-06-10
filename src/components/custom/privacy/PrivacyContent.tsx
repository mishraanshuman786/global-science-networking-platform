// TermsContent.tsx


import {privacySections} from "@/data/privacy";
import { AlertCircle, TriangleAlert } from "lucide-react";

export default function PrivacyContent() {
  return (
    <section className="py-12">
      <div className="page-container">
        <div className="mx-auto  space-y-6">
          {privacySections.map((section) => (
            <article
              key={section.id}
              className="rounded-2xl border bg-card p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                Section {section.id}
              </span>

              <h2 className="mt-2 text-2xl font-semibold">
                {section.title}
              </h2>

              <div className="my-6 border-t" />

              {section.notice && (
                <div
                  className={`mb-6 flex gap-3 rounded-xl p-4 ${
                    section.notice.type === "warning"
                      ? "bg-amber-50"
                      : "bg-blue-50"
                  }`}
                >
                  {section.notice.type === "warning" ? (
                    <TriangleAlert className="mt-0.5 h-5 w-5 text-amber-600" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-5 w-5 text-primary" />
                  )}

                  <p className="text-sm">
                    {section.notice.text}
                  </p>
                </div>
              )}

              {section.content?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-4 leading-7 text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}