export default function EventCalendar() {
  return (
    <div className="rounded-xl border bg-white p-5">
      <h3 className="font-semibold">
        July 2025
      </h3>

      <div className="mt-4 grid grid-cols-7 gap-2 text-center text-sm">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(
          (day) => (
            <div key={day} className="font-medium">
              {day}
            </div>
          )
        )}

        {Array.from({ length: 31 }).map((_, i) => (
          <button
            key={i}
            className={`h-8 w-8 rounded-full text-sm ${
              i === 11
                ? "bg-primary text-white"
                : "hover:bg-muted"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}