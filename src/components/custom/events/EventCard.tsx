import { Event } from "@/types/events";

interface Props {
  event: Event;
}

export default function EventCard({
  event,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-5">
      <div className="grid gap-4 md:grid-cols-[70px_1fr_auto]">
        <div>
          <p className="text-primary">
            {event.month}
          </p>

          <h3 className="text-3xl font-bold">
            {event.day}
          </h3>

          <p>{event.weekday}</p>
        </div>

        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <span
                key={tag.label}
                className="rounded bg-muted px-2 py-1 text-xs"
              >
                {tag.label}
              </span>
            ))}
          </div>

          <h3 className="font-semibold">
            {event.title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {event.speaker} · {event.organization}
          </p>

          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <span>{event.time}</span>
            <span>{event.location}</span>
            <span>
              {event.registeredCount} registered
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <button className="rounded-lg border px-4 py-2">
            Register free
          </button>
        </div>
      </div>
    </div>
  );
}