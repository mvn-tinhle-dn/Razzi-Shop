import { Checkbox } from "antd";
import * as React from "react";
import Star from "../../modules/Star";

export interface IRatingFilterProps {}

export default function RatingFilter(props: IRatingFilterProps) {
  return (
    <ul className="filter-sub-list">
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star color="gray" />
          </Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>
            <Star />
            <Star />
            <Star />
            <Star color="gray" />
            <Star color="gray" />
          </Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>
            <Star />
            <Star />
            <Star color="gray" />
            <Star color="gray" />
            <Star color="gray" />
          </Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>
            <Star />
            <Star color="gray" />
            <Star color="gray" />
            <Star color="gray" />
            <Star color="gray" />
          </Checkbox>
        </span>
      </li>
    </ul>
  );
}
