import * as React from "react";
import { Checkbox } from "antd";
import { Menu } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
export interface IMenuFilterProps {}

function getItem(label: any, key: any, children?: any, type?: any) {
  return {
    key,
    children,
    label,
    type,
  };
}
const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const items = [
  getItem(<Checkbox onChange={(e) => onChange(e)}>Bedroom</Checkbox>, "sub1", [
    getItem(<Checkbox onChange={(e) => onChange(e)}>Beds</Checkbox>, "g1"),
    getItem(
      <Checkbox onChange={(e) => onChange(e)}>Dressers & Chests</Checkbox>,
      "g2"
    ),
  ]),
  getItem(
    <Checkbox onChange={(e) => onChange(e)}>Home Office</Checkbox>,
    "sub2",
    [
      getItem(
        <Checkbox onChange={(e) => onChange(e)}>Bookcases</Checkbox>,
        "5"
      ),
      getItem(
        <Checkbox onChange={(e) => onChange(e)}>Desk Chairs</Checkbox>,
        "6"
      ),
      getItem(
        <Checkbox onChange={(e) => onChange(e)}>Office Desks</Checkbox>,
        "7"
      ),
    ]
  ),
  getItem(<Checkbox onChange={(e) => onChange(e)}>Kitchen</Checkbox>, "sub3", [
    getItem(
      <Checkbox onChange={(e) => onChange(e)}>Dining Chairs</Checkbox>,
      "8"
    ),
    getItem(
      <Checkbox onChange={(e) => onChange(e)}>Dining Tables</Checkbox>,
      "9"
    ),
    getItem(
      <Checkbox onChange={(e) => onChange(e)}>Kitchen Cabinets</Checkbox>,
      "10"
    ),
  ]),
  getItem(
    <Checkbox onChange={(e) => onChange(e)}>Living Room</Checkbox>,
    "sub4",
    [
      getItem(
        <Checkbox onChange={(e) => onChange(e)}>Arm Chairs</Checkbox>,
        "11"
      ),
      getItem(
        <Checkbox onChange={(e) => onChange(e)}>Coffee Tables</Checkbox>,
        "12"
      ),
      getItem(
        <Checkbox onChange={(e) => onChange(e)}>Sectionals</Checkbox>,
        "13"
      ),
      getItem(<Checkbox onChange={(e) => onChange(e)}>Sofas</Checkbox>, "14"),
      getItem(
        <Checkbox onChange={(e) => onChange(e)}>Tables TV</Checkbox>,
        "15"
      ),
    ]
  ),
];
export default function MenuFilter(props: IMenuFilterProps) {
  return (
    <Menu
      style={{
        width: 256,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
}
