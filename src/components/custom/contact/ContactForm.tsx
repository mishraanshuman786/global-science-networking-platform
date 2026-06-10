// ContactForm.tsx

import { inquiryTopics } from "@/data/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="text-xl font-semibold">
        Send us a message
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        We'll get back to you within one business day.
      </p>

      <div className="mt-6">
        <p className="mb-3 text-sm font-medium">
          Topic
        </p>

        <div className="flex flex-wrap gap-2">
          {inquiryTopics.map((topic) => (
            <button
              key={topic}
              className="rounded-full border px-3 py-1 text-sm"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
      </div>

      <div className="mt-4">
        <Input placeholder="Email address" />
      </div>

      <div className="mt-4">
        <Input placeholder="Institution / organization" />
      </div>

      <div className="mt-4">
        <Textarea
          rows={5}
          placeholder="Tell us how we can help..."
        />
      </div>

      <Button className="mt-6 w-full">
        Send message
      </Button>

      <div className="mt-4 rounded-lg bg-blue-50 p-4 text-sm text-muted-foreground">
        <strong>Privacy note:</strong> Your message is
        only read by our support team and is never
        shared with third parties.
      </div>
    </div>
  );
}