import * as React from "react";
import { Checkbox } from "antd";
import { Menu } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
export interface IRoomFilterProps {}

export default function RoomFilter(props: IRoomFilterProps) {
  return (
    <ul className="filter-sub-list">
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>Bath</Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>Bed</Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>DinMing</Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>Kitchen</Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>Office</Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox>OutDoor</Checkbox>
        </span>
      </li>
    </ul>
  );
}
