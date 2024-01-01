export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-bgBlack-800 z-50 text-textLight-800">
      <svg viewBox="0 0 400 160" className="translate-y-[-10%]">
        <text
          x="50%"
          y="50%"
          dy="0.32em"
          textAnchor="middle"
          style={{
            fontSize: "2rem",
            stroke: "white",
            strokeWidth: 3,
            fontWeight: "700",
            fill: "transparent",
            letterSpacing: "4px-",
            animation: "4s infinite alternate animate-stroke",
          }}
        >
          Suhaan Bhandary
        </text>
        <text
          x="50%"
          y="50%"
          dy="0.32em"
          dx="4.2em"
          textAnchor="middle"
          style={{
            fontSize: "2rem",
            stroke: "white",
            strokeWidth: 3,
            fontWeight: "700",
            fill: "transparent",
            letterSpacing: "4px-",
            animation: "4s infinite alternate animate-stroke",
          }}
        >
          .
        </text>
      </svg>
    </div>
  );
}
