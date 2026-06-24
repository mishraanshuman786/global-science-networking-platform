import { Event } from "@/types/events";

interface Props {
  event: Event;
}

export default function FeaturedEventCard({
  event,
}: Props) {
  return (
    <div className="rounded-2xl bg-[#0D2040] p-6 text-white">
      <div className="grid gap-4 md:grid-cols-[80px_1fr]">
        <div>
          <p>{event.month}</p>
          <h2 className="text-4xl font-bold">
            {event.day}
          </h2>
          <p>{event.weekday}</p>
        </div>

        <div>
          <span className="text-sm">
            {event.tags[0]?.label}
          </span>

          <h3 className="mt-2 text-2xl font-semibold">
            {event.title}
          </h3>

          <p className="mt-2">
            {event.speaker} · {event.organization}
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <span>{event.time}</span>
            <span>{event.location}</span>
            <span>
              {event.registeredCount} registered
            </span>
          </div>

          <button className="mt-5 rounded-lg border px-5 py-2">
            Register — Join Free
          </button>
        </div>
      </div>
    </div>
  );
}