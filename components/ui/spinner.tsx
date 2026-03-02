"use client";

export default function Spinner({ size = 48 }: { size?: number }) {
  const px = `${size}px`;
  return (
    <div className="flex items-center justify-center" style={{ width: px, height: px }}>
      <div
        style={{
          width: px,
          height: px,
          borderRadius: "9999px",
          border: "4px solid var(--muted)",
          borderTopColor: "var(--primary)",
        }}
        className="animate-spin"
      />
    </div>
  );
}
