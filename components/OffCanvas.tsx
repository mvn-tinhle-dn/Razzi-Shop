import { Drawer } from "antd";
import * as React from "react";
import MenuIcon from "../modules/MenuIcon";
import { CloseOutlined } from "@ant-design/icons";
import Logo from "../modules/Logo";
import MenuHeaderMobile from "./MenuHeaderMoblile";
export interface IOffCanvasProps {}

export default function OffCanvas(props: IOffCanvasProps) {
  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <button type="button" onClick={showDrawer}>
        <MenuIcon />
      </button>
      <Drawer
        title={<Logo />}
        placement={"left"}
        width={470}
        onClose={onClose}
        visible={visible}
      >
        <MenuHeaderMobile />
      </Drawer>
    </>
  );
}
