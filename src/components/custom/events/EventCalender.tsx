interface Props {
  selectedDate: number | null;

  onDateChange: (date: number | null) => void;
}
export default function EventCalendar({ selectedDate, onDateChange }: Props) {
  const handleDateClick = (date: number) => {
    if (selectedDate === date) {
      onDateChange(null);
    } else {
      onDateChange(date);
    }
  };

  return (
    <div className="rounded-xl border bg-white p-5">
      <h3 className="font-semibold">July 2025</h3>

      <div className="mt-4 grid grid-cols-7 gap-2 text-center text-sm">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
          <div key={day} className="font-medium">
            {day}
          </div>
        ))}

        {Array.from({ length: 31 }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleDateClick(i + 1)}
            className={`h-8 w-8 rounded-full text-sm
  ${selectedDate === i + 1 ? "bg-[#0D2040] text-white" : "hover:bg-muted"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
