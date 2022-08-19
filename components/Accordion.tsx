import { useRef, useState } from "react";

export interface IAccordionProps {
  children?: any;
  location?: "left" | "right" | "center";
  title: string;
}

export default function Accordion(props: IAccordionProps) {
  const [state, setSate] = useState(false);

  const handleToggle = () => {
    setSate(!state);
  };

  return (
    <>
      <div className="product-filter ">
        <span
          onClick={handleToggle}
          className={`filter-title ${state ? "active" : ""}`}
        >
          {props.title}
        </span>
        <div
          className={`filter-sub ${props.location ? props.location : ""} ${
            state ? "active" : ""
          }`}
        >
          {props.children}
        </div>
      </div>
    </>
  );
}
