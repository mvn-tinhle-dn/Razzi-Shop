import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import Accordion from "../components/Accordion";
import Breadcrumb from "../components/Breadcrumb";
import Carousel from "../components/Carousel";
import ColorFilter from "../components/Filter/ColorFilter";
import FilterControl from "../components/Filter/FilterControl";
import HeadCustom from "../components/HeadCustom";
import MenuFilter from "../components/Filter/MenuFilter";
import OderFilter from "../components/Filter/OrderFilter";
import PageTitle from "../components/PageTitle";
import PriceFilter from "../components/Filter/PriceFilter";
import RoomFilter from "../components/Filter/RoomFilter";
import RatingFilter from "../components/Filter/RatingFilter";
import BrandFilter from "../components/Filter/BrandFilter";
import ProductItem from "../components/ProductItem";
import ProductList from "../components/ProductList";
import ScrollTo from "../components/scrollTo";

const Home: NextPage = () => {
  const home = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      const scrolled = window.scrollY;

      if (scrolled >= 100) {
        (home.current as HTMLHeadingElement)?.classList.add("home-up");
      } else {
        (home.current as HTMLHeadingElement)?.classList.remove("home-up");
      }
    });
  });
  return (
    <>
      <HeadCustom page="Home"></HeadCustom>
      <div ref={home} className="home">
        <div className="container">
          <div className="page-header">
            <Breadcrumb href="." items={["Home", "Shop"]} />
            <PageTitle title="Shop" />
          </div>
          <div className="page-slider">
            <Carousel
              types={[
                {
                  image:
                    "https://i0.wp.com/demo4.drfuri.com/razzi3/wp-content/uploads/sites/17/2021/04/f1310.jpg?fit=250%2C250&amp;ssl=1",
                  title: "Living Room(8)",
                },
                {
                  image:
                    "https://i0.wp.com/demo4.drfuri.com/razzi3/wp-content/uploads/sites/17/2020/12/f510.jpg?fit=250%2C250&ssl=1",
                  title: "Office Desks(5)",
                },
                {
                  image:
                    "https://i0.wp.com/demo4.drfuri.com/razzi3/wp-content/uploads/sites/17/2020/12/f612.jpg?fit=250%2C250&ssl=1",
                  title: "Home Office(5)",
                },
                {
                  image:
                    "https://i0.wp.com/demo4.drfuri.com/razzi3/wp-content/uploads/sites/17/2021/04/f1311.jpg?fit=250%2C250&ssl=1",
                  title: "Sofas(4)",
                },
                {
                  image:
                    "https://i0.wp.com/demo4.drfuri.com/razzi3/wp-content/uploads/sites/17/2021/04/f1511.jpg?fit=250%2C250&ssl=1",
                  title: "Arm Chairs(3)",
                },
                {
                  image:
                    "https://i0.wp.com/demo4.drfuri.com/razzi3/wp-content/uploads/sites/17/2021/04/f310.jpg?fit=250%2C250&ssl=1",
                  title: "Kitchen",
                },
              ]}
            />
          </div>
          <div className="page-filter flex">
            <Accordion title="Order By">
              {" "}
              <OderFilter />
              <FilterControl />
            </Accordion>
            <Accordion title="Category">
              <MenuFilter />
              <FilterControl />
            </Accordion>
            <Accordion title="Color">
              <ColorFilter />
              <FilterControl />
            </Accordion>
            <Accordion title="Room">
              <RoomFilter />
              <FilterControl />
            </Accordion>
            <Accordion title="Brand" location="right">
              <BrandFilter />
              <FilterControl />
            </Accordion>
            <Accordion title="Price">
              <PriceFilter />
              <FilterControl />
            </Accordion>
            <Accordion title="Rating" location="right">
              <RatingFilter />
              <FilterControl />
            </Accordion>
          </div>
          <div className="page-product">
            <ProductList />
          </div>
          <div className=" page-title-sub">
            <h4 className="title-sub-text">Showing 16 of 16 products</h4>
          </div>
        </div>
        <ScrollTo />
      </div>
    </>
  );
};

export default Home;
