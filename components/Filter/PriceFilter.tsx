import { Checkbox } from "antd";
import * as React from "react";

export interface IPriceFilterProps {}

export default function PriceFilter(props: IPriceFilterProps) {
  return (
    <ul className="filter-sub-list">
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>£ 10.00 - £ 49.00</Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>£ 50.00 - £ 99.00</Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>£ 100.00 - £ 199.00</Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>£ 200.00 +</Checkbox>
        </span>
      </li>
    </ul>
  );
}
