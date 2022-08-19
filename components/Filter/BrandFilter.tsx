import { Input } from "antd";
import * as React from "react";

export interface IBrandFilterProps {}
const brands = [
  "Amcrest",
  "Syma",
  "Tada",
  "Balmain",
  "USA Store",
  "Kenzo",
  "Maison Margiela",
  "Moschino",
  "Versace",
];
export default function BrandFilter(props: IBrandFilterProps) {
  const [brand, setBrand] = React.useState(brands);
  const [valueInput, setValueInput] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value.toUpperCase());

    const brandFill = brands.filter((item) => {
      return item.toLocaleUpperCase().includes(valueInput);
    });
    setBrand(brandFill);
    if (valueInput == "") {
      setBrand(brands);
    }
  };

  return (
    <>
      <Input
        placeholder="Basic usage"
        value={valueInput || ""}
        onChange={(e) => onChange(e)}
      />
      <ul className="filter-sub-list brand-list">
        {brand?.map((item, index) => {
          return (
            <li key={index} className="filter-sub-item">
              <span className="filter-option">{item}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
