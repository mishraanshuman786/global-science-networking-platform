// components/faq/FaqSupportCard.tsx

import { Mail } from "lucide-react";

export default function FaqSupportCard() {
  return (
    <div className="mt-8  border bg-white p-8 text-center">
      <h3 className="font-semibold">
        Still have a question?
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Our support team typically responds within one
        business day.
      </p>

      <button className="mt-5 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium">
        <Mail size={16} />
        Contact support
      </button>
    </div>
  );
}