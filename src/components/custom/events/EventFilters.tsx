import { eventFilters } from "@/data/events";

interface Props {
  selectedFilter: string;
  onFilterChange: (value: string) => void;
}

export default function EventFilters({
  selectedFilter,
  onFilterChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {eventFilters.map((filter, index) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`rounded-full px-4 py-2 text-sm
  ${
    selectedFilter === filter.id ? "bg-[#0D2040] text-white" : "border bg-white"
  }`}
        >
          {filter.label}
          </button>
      ))}
    </div>
  );
}
