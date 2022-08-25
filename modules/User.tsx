import * as React from "react";
import OffCanvasRight from "../components/OfCanvasRight";
import FormLogin from "./FromLogin";

export interface IUserProps {}

export default function User(props: IUserProps) {
  const [visible, setVisible] = React.useState(false);
  const showSearch = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <span onClick={(e) => showSearch(e)}>
        <svg
          aria-hidden="true"
          role="img"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </span>
      <OffCanvasRight title="Sign in" show={visible} onClose={onClose}>
        <FormLogin />
      </OffCanvasRight>
    </>
  );
}
