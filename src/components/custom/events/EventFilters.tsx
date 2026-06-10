import { eventFilters } from "@/data/events";

export default function EventFilters() {
  return (
    <div className="flex flex-wrap gap-2">
      {eventFilters.map((filter, index) => (
        <button
          key={filter.id}
          className={`rounded-full px-4 py-2 text-sm
          ${
            index === 0
              ? "bg-primary text-white"
              : "border bg-white"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}