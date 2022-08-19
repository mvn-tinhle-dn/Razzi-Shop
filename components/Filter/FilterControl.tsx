import * as React from "react";

export interface IFilterControlProps {}

export default function FilterControl(props: IFilterControlProps) {
  return (
    <div className="filter-control">
      <button type="button" className="btn btn-filter btn-clear">
        Clear
      </button>
      <button type="submit" className="btn btn-filter btn-submit">
        Show Results
      </button>
    </div>
  );
}
