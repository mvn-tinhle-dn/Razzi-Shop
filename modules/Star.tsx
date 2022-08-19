import * as React from "react";

export interface IStarProps {
  color?: "gray" | "black";
}

export default function Star(props: IStarProps) {
  return (
    <svg
      aria-hidden="true"
      role="img"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      color={props.color === "gray" ? "#eee" : "black"}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}
