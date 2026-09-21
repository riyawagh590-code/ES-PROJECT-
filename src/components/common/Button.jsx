export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) {
  const styles = {
    primary:
      "bg-[#424b55] text-white hover:bg-[#303841] shadow-md",
    purple:
      "bg-[#7357d9] text-white hover:bg-[#6044c5] shadow-md",
    green:
      "bg-[#07865f] text-white hover:bg-[#056d4e] shadow-md",
    outline:
      "border border-[#d8cfd0] bg-white text-[#424b55] hover:bg-[#f8f5f5]",
    danger:
      "border border-[#efb7b7] bg-white text-[#c62828] hover:bg-[#fff5f5]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        rounded-xl px-5 py-3
        font-semibold transition-all duration-200
        hover:-translate-y-0.5
        active:translate-y-0
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}