export default function Badge({ children, variant = "default" }) {
  const styles = {
    default: "bg-[#eeeaf8] text-[#514b63]",
    green: "bg-[#dff7ec] text-[#087f5b]",
    orange: "bg-[#fff0d5] text-[#a85d00]",
    red: "bg-[#ffe4e4] text-[#b42318]",
    purple: "bg-[#e9e2ff] text-[#6840c6]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${styles[variant]}`}
    >
      {children}
    </span>
  );
}