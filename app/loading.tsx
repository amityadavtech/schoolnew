export default function Loading() {
  // Default loading indicator used by Next.js during initial page load
  // and route transitions when a `loading.tsx` file exists in the app
  // directory. We show a full‑screen centered spinner.
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div
        className="w-16 h-16 rounded-full animate-spin"
        style={{
          border: "4px solid var(--muted)",
          borderTopColor: "var(--primary)",
        }}
      />
    </div>
  );
}
