import { Menu } from "antd";
import * as React from "react";

export interface IMenuHeaderMobileProps {}
function getItem(label: string, key: string, children?: any) {
  return {
    key,
    children,
    label,
  };
}
const items = [
  getItem("Home", "sub1", [
    getItem("Topic 1", "sub1-1", [
      getItem("Home v1 – Minimal", "1"),
      getItem("Home v2 – Classic", "2"),
      getItem("Home v3 – Fashion", "3"),
      getItem("Home v4 – Boxes", "4"),
      getItem("Home v5 – Simple", "5"),
      getItem("Home v6 – Asymmetric", "6"),
      getItem("Home v7 – Masonry", "7"),
      getItem("Home v8 – Landing", "8"),
      getItem("Home v9 – Fashion", "9"),
      getItem("Home v10 – Cases", "10"),
      getItem("Home v11 – Furniture", "11"),
      getItem("Home v12 – Furniture", "12"),
      getItem("Home v13 – Furniture", "13"),
      getItem("ome v14 – Furniture", "14"),
      getItem("Home v15 – Furniture", "15"),
      getItem("Home v16 – Instagram", "16"),
    ]),
    getItem("Topic 2", "sub1-2", [
      getItem("Home v17 – Interior Decor", "17"),
      getItem("Home v18 – Food Store", "18"),
      getItem("Home v19 – Electronics", "19"),
      getItem("Home v20 – Parallax", "20"),
      getItem("Home v21 – Cosmetics", "21"),
      getItem("Home v22 – Full Width", "22"),
      getItem("Home v23 – Jewelry", "23"),
      getItem("Home v24 – Baby", "24"),
      getItem("Home v25 – Furniture", "25"),
      getItem("Home v26 – Pharmacy", "26"),
      getItem("Home v27 – Tools", "27"),
      getItem("Home v28 – Nails", "28"),
      getItem("Home v29 – Fashion Sport", "29"),
      getItem("Home v30 – Books", "30"),
      getItem("Home v31 – Grocery", "31"),
    ]),
  ]),
  getItem("Shop", "sub2", [
    getItem("Shop Layout", "sub2-1", [
      getItem("Default", "32"),
      getItem("TopBar– Classic", "33"),
      getItem("Modal – Fashion", "34"),
      getItem("Home v4 – Boxes", "35"),
      getItem("Home v5 – Simple", "36"),
    ]),
    getItem("Product Type", "sub2-2", [
      getItem("Home v17 – Interior Decor", "37"),
      getItem("Home v18 – Food Store", "38"),
      getItem("Home v19 – Electronics", "39"),
      getItem("Home v20 – Parallax", "40"),
      getItem("Home v21 – Cosmetics", "41"),
    ]),
    getItem("Product Card", "sub2-3", [
      getItem("Home v17 – Interior Decor", "42"),
      getItem("Home v18 – Food Store", "43"),
      getItem("Home v19 – Electronics", "44"),
      getItem("Home v20 – Parallax", "45"),
      getItem("Home v21 – Cosmetics", "46"),
    ]),
    getItem("Product Hover", "sub2-4", [
      getItem("Home v17 – Interior Decor", "47"),
      getItem("Home v18 – Food Store", "48"),
      getItem("Home v19 – Electronics", "49"),
      getItem("Home v20 – Parallax", "50"),
      getItem("Home v21 – Cosmetics", "51"),
    ]),
  ]),
  getItem("Blog", "sub3", [
    getItem("Blog grid 2 columns", "sub3-1"),
    getItem("Blog grid 2 columns", "sub3-2"),
    getItem("Single Post", "sub3-3"),
  ]),
  getItem("Pages", "sub4", [
    getItem("About Us", "sub4-1"),
    getItem("FAQs", "sub4-2"),
    getItem("Store Location", "sub4-3"),
    getItem("Shipping and Returns", "sub4-4"),
    getItem("404 Page", "sub4-5"),
    getItem("Contact Us", "sub4-6"),
    getItem("Coming Son", "sub4-7"),
  ]),
  getItem("Features", "sub5", [
    getItem("Elements", "sub5-1", [
      getItem("Buttons", "52"),
      getItem("Banner", "53"),
      getItem("Heading", "54"),
      getItem("Icon-Box", "55"),
      getItem("Keywords", "56"),
    ]),
    getItem("Flick", "sub5-2", [
      getItem(" Muller", "57"),
      getItem(" Brands", "58"),
      getItem(" Slides", "59"),
      getItem(" Blog", "60"),
      getItem(" Map", "61"),
    ]),
    getItem("Products", "sub5-3", [
      getItem("Product Banner", "62"),
      getItem("Product Carousel", "63"),
      getItem(" Product Category", "64"),
      getItem(" Product Single", "65"),
      getItem("Product Masonry", "66"),
    ]),
  ]),
];
export default function MenuHeaderMobile(props: IMenuHeaderMobileProps) {
  return (
    <>
      <Menu
        style={{
          width: 422,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={"inline"}
        theme={"light"}
        items={items}
      />
    </>
  );
}
