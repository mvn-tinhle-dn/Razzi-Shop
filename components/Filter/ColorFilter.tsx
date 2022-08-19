import * as React from "react";

export interface IColorFilterProps {}

export default function ColorFilter(props: IColorFilterProps) {
  return (
    <ul className="filter-sub-list">
      <li className="filter-sub-item">
        <div className="filter-option">
          <label className="check-round">
            Black
            <input type="checkbox" />
            <span className="checkmark black"></span>
          </label>
        </div>
      </li>
      <li className="filter-sub-item">
        <div className="filter-option">
          <label className="check-round">
            <input type="checkbox" />
            <span className="checkmark blue"></span>
            Blue
          </label>
        </div>
      </li>
      <li className="filter-sub-item">
        <div className="filter-option">
          <label className="check-round">
            <input type="checkbox" />
            <span className="checkmark brown"></span>
            Brown
          </label>
        </div>
      </li>
      <li className="filter-sub-item">
        <div className="filter-option">
          <label className="check-round">
            <input type="checkbox" />
            <span className="checkmark gray"></span>
            Gray
          </label>
        </div>
      </li>
      <li className="filter-sub-item">
        <div className="filter-option">
          <label className="check-round">
            <input type="checkbox" />
            <span className="checkmark green"></span>
            Green
          </label>
        </div>
      </li>
      <li className="filter-sub-item">
        <div className="filter-option">
          <label className="check-round">
            <input type="checkbox" />
            <span className="checkmark red"></span>
            Red
          </label>
        </div>
      </li>
    </ul>
  );
}
