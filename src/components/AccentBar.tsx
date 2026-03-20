export default function AccentBar() {
  return (
    <div
      className="h-1.5 w-full"
      style={{
        background:
          "linear-gradient(90deg, #a64e0d 0%, #c05d10 30%, #e88033 60%, #c05d10 100%)",
      }}
      aria-hidden="true"
    />
  );
}
