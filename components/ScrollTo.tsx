import * as React from "react";

export interface IScrollToProps {}

export default function ScrollTo(props: IScrollToProps) {
  const [hideScroll, setHideScroll] = React.useState(true);
  React.useEffect(() => {
    window.addEventListener("scroll", function (e) {
      const scrolled = window.scrollY;
      scrolled < 689 ? setHideScroll(true) : setHideScroll(false);
    });
  });
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setHideScroll(false);
  };

  return (
    <div
      className={`scroll-top ${hideScroll ? "" : "show"}`}
      onClick={() => handleScrollTop()}
    >
      <span className="scroll-icon">
        <svg
          aria-hidden="true"
          role="img"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="0" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </span>
    </div>
  );
}
