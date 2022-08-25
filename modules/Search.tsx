import * as React from "react";
import OffCanvasRight from "../components/OfCanvasRight";

export interface ISearchProps {}

export default function Search(props: ISearchProps) {
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
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </span>
      <OffCanvasRight title="Search Products" show={visible} onClose={onClose}>
        <div className="search-sub">
          <div className="search-sub-item">
            <select className="product-search-select">
              <option value="0">All Categories</option>
              <option className="level-0" value="bedroom">
                Bedroom
              </option>
              <option className="level-1" value="beds">
                &nbsp;&nbsp;&nbsp;Beds
              </option>
              <option className="level-1" value="dressers-chests">
                &nbsp;&nbsp;&nbsp;Dressers &amp; Chests
              </option>
              <option className="level-0" value="home-office">
                Home Office
              </option>
              <option className="level-1" value="bookcases">
                &nbsp;&nbsp;&nbsp;Bookcases
              </option>
              <option className="level-1" value="desk-chairs">
                &nbsp;&nbsp;&nbsp;Desk Chairs
              </option>
              <option className="level-1" value="office-desks">
                &nbsp;&nbsp;&nbsp;Office Desks
              </option>
              <option className="level-0" value="kitchen">
                Kitchen
              </option>
              <option className="level-1" value="dining-chairs">
                &nbsp;&nbsp;&nbsp;Dining Chairs
              </option>
              <option className="level-1" value="dining-tables">
                &nbsp;&nbsp;&nbsp;Dining Tables
              </option>
              <option className="level-1" value="kitchen-cabinets">
                &nbsp;&nbsp;&nbsp;Kitchen Cabinets
              </option>
              <option className="level-0" value="living-room">
                Living Room
              </option>
              <option className="level-1" value="arm-chairs">
                &nbsp;&nbsp;&nbsp;Arm Chairs
              </option>
              <option className="level-1" value="coffee-tables">
                &nbsp;&nbsp;&nbsp;Coffee Tables
              </option>
              <option className="level-1" value="sectionals">
                &nbsp;&nbsp;&nbsp;Sectionals
              </option>
              <option className="level-1" value="sofas">
                &nbsp;&nbsp;&nbsp;Sofas
              </option>
              <option className="level-1" value="tables-tv">
                &nbsp;&nbsp;&nbsp;Tables TV
              </option>
            </select>
            <span>
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
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>
          <div className="search-sub-item">
            <input type="text" className="search-sub-input" />
            <span>
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
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </div>
        </div>
      </OffCanvasRight>
    </>
  );
}
