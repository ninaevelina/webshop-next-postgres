import "./arrow-down.scss";

export default function ArrowDown() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow"
    >
      <path
        d="M12 4V18"
        stroke="#FFFFFF"
        stroke-linecap="square"
        stroke-linejoin="round"
      ></path>
      <path
        d="M19 12L12 19L5 12"
        stroke="#FFFFFF"
        stroke-linecap="square"
      ></path>
    </svg>
  );
}
