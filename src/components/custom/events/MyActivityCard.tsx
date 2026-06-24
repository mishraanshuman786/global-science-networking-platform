export default function MyActivityCard() {
  return (
    <div className="rounded-xl border bg-white p-5">
      <h3 className="font-semibold">
        My Activity
      </h3>

      <div className="mt-4 space-y-3">
        <div className="flex justify-between">
          <span>Registered</span>
          <span>12</span>
        </div>

        <div className="flex justify-between">
          <span>Saved</span>
          <span>8</span>
        </div>

        <div className="flex justify-between">
          <span>Attended</span>
          <span>5</span>
        </div>

        <div className="flex justify-between">
          <span>Certificates</span>
          <span>3</span>
        </div>
      </div>
    </div>
  );
}