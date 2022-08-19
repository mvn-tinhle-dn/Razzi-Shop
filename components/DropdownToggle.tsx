import * as React from "react";

export interface Props {
  children?: any;
  title: string;
  location?: "left" | "center" | "right"; //default left
  href: string;
  widthSub?: number;
}

export default function DropdownToggle(props: Props) {
  const styleWidth = {
    width: props.widthSub ? props?.widthSub + "px" : "auto",
  };
  return (
    <>
      <a href={`${props.href}`} className="dropdown-toggle">
        <p className="dropdown-title"> {props?.title}</p>
      </a>
      <div style={styleWidth} className={`dropdown-sub ${props.location}`}>
        {props?.children}
      </div>
    </>
  );
}
