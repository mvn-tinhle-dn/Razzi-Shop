import { useEffect, useRef, useState } from "react";

export interface IAccordionProps {
  children?: any;
  location?: "left" | "right" | "center";
  title: string;
}

export default function Accordion(props: IAccordionProps) {
  const [state, setSate] = useState(false);
  const ftTitle = useRef(null);
  const ftSub = useRef(null);
  const handleToggle = () => {
    setSate(!state);
  };
  useEffect(() => {
    document.getElementById("__next")?.addEventListener("click", (e) => {
      // console.log(document.getElementsByClassName("container")[2]);
      if (e.target === document.getElementsByClassName("container")[2]) {
        setSate(false);
      }
      // if (ftTitle != null) {
      //   if (e.target !== ftTitle.current) {
      //     setSate(false);
      //   }
      // }
      // if (ftSub != null) {
      //   console.log(e.target, ftSub.current);
      // }
    });
  }, []);

  return (
    <>
      <div className="product-filter ">
        <span
          ref={ftTitle}
          onClick={handleToggle}
          className={`filter-title ${state ? "active" : ""}`}
        >
          {props.title}
        </span>
        <div
          ref={ftSub}
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
