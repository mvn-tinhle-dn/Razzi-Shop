import * as React from "react";

export interface IBreadcrumbProps {
  items: string[];
  href: string;
}

export default function Breadcrumb(props: IBreadcrumbProps) {
  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb-list flex">
        {props?.items.map((item, index) => {
          return (
            <li key={index} className="breadcrumb-item">
              <a href={props?.href}>{item}</a>
              <span className="">
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
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
