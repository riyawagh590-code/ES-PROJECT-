export default function Loading({ text = "Loading..." }) {
  return (
    <div className="flex min-h-[250px] flex-col items-center justify-center gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#e5def7] border-t-[#7357d9]" />

      <p className="text-sm font-semibold text-[#817579]">
        {text}
      </p>
    </div>
  );
}