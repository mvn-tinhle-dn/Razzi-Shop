import * as React from "react";

export interface Props {
  items: string[];
  selected: string;
}

export default function Dropdown(props: Props) {
  return (
    <div className="dropdown flex align-items-center">
      <span className="current flex align-items-center">
        <span className="selected">{props?.selected}</span>
        <svg
          aria-hidden="true"
          role="img"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
      <div className="content-droplist">
        <ul>
          {props?.items.map((item, index) => {
            return (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
