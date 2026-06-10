import { eventFormatStats } from "@/data/events";

export default function EventStatsCard() {
  return (
    <div className="rounded-xl border bg-white p-5">
      <h3 className="mb-4 font-semibold">
        By format
      </h3>

      <div className="space-y-3">
        {eventFormatStats.map((item) => (
          <div
            key={item.label}
            className="flex justify-between"
          >
            <span>{item.label}</span>
            <span>{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}