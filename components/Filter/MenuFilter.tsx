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

const items = [
  getItem(<Checkbox>Bedroom</Checkbox>, "sub1", [
    getItem(<Checkbox>Beds</Checkbox>, "g1"),
    getItem(<Checkbox>Dressers & Chests</Checkbox>, "g2"),
  ]),
  getItem(<Checkbox>Home Office</Checkbox>, "sub2", [
    getItem(<Checkbox>Bookcases</Checkbox>, "5"),
    getItem(<Checkbox>Desk Chairs</Checkbox>, "6"),
    getItem(<Checkbox>Office Desks</Checkbox>, "7"),
  ]),
  getItem(<Checkbox>Kitchen</Checkbox>, "sub3", [
    getItem(<Checkbox>Dining Chairs</Checkbox>, "8"),
    getItem(<Checkbox>Dining Tables</Checkbox>, "9"),
    getItem(<Checkbox>Kitchen Cabinets</Checkbox>, "10"),
  ]),
  getItem(<Checkbox>Living Room</Checkbox>, "sub4", [
    getItem(<Checkbox>Arm Chairs</Checkbox>, "11"),
    getItem(<Checkbox>Coffee Tables</Checkbox>, "12"),
    getItem(<Checkbox>Sectionals</Checkbox>, "13"),
    getItem(<Checkbox>Sofas</Checkbox>, "14"),
    getItem(<Checkbox>Tables TV</Checkbox>, "15"),
  ]),
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
