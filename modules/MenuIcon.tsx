import * as React from "react";

export interface IMenuIconProps {}

export default function MenuIcon(props: IMenuIconProps) {
  return (
    <svg
      aria-hidden="true"
      role="img"
      focusable="false"
      width="16"
      height="16"
      viewBox="0 0 24 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 0H0V2.10674H24V0Z"></path>
      <path d="M24 7.88215H0V9.98889H24V7.88215Z"></path>
      <path d="M24 15.8925H0V18H24V15.8925Z"></path>
    </svg>
  );
}
