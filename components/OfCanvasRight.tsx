import { Drawer } from "antd";
import * as React from "react";

export interface IOffCanvasRightProps {
  title: string;
  children?: any;
  show: true | false;
  onClose: any;
}

export default function OffCanvasRight(props: IOffCanvasRightProps) {
  return (
    <Drawer
      title={props.title}
      placement={"right"}
      width={470}
      onClose={props.onClose}
      visible={props.show}
    >
      {props.children}
    </Drawer>
  );
}
