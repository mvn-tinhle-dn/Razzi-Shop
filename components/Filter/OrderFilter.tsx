import * as React from "react";

export interface IOderFilterProps {}

export default function OderFilter(props: IOderFilterProps) {
  return (
    <ul className="filter-sub-list">
      <li className="filter-sub-item">
        <span className="filter-option">Default sorting</span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">Sort by popularity</span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">Sort by average rating</span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">Sort by latest</span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">Sort by price: low to high</span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">Sort by price: high to low</span>
      </li>
    </ul>
  );
}
