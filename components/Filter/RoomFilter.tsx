import * as React from "react";
import { Checkbox } from "antd";
import { Menu } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
export interface IRoomFilterProps {}

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

export default function RoomFilter(props: IRoomFilterProps) {
  return (
    <ul className="filter-sub-list">
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox onChange={(e) => onChange(e)}>Bath</Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox onChange={(e) => onChange(e)}>Bed</Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox onChange={(e) => onChange(e)}>DinMing</Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox onChange={(e) => onChange(e)}>Kitchen</Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox onChange={(e) => onChange(e)}>Office</Checkbox>
        </span>
      </li>
      <li className="filter-sub-item">
        <span className="filter-option">
          <Checkbox onChange={(e) => onChange(e)}>OutDoor</Checkbox>
        </span>
      </li>
    </ul>
  );
}
