import * as React from "react";
import Bag from "../modules/Bag";
import Heart from "../modules/Heart";
import View from "../modules/View";

interface props {
  item: {
    images: ["", ""];
    name: string;
    price: number;
    status: string;
    id: string;
    sale: number;
  };
}
const ProductItem: React.FC<props> = ({ item }) => {
  const div1 = React.useRef<HTMLDivElement>(null);
  const imgEl = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    div1.current?.addEventListener("mouseenter", () => {
      (imgEl.current as HTMLImageElement).src = item.images[1];
    });
    div1.current?.addEventListener("mouseleave", () => {
      (imgEl.current as HTMLImageElement).src = item.images[0];
    });
  });
  return (
    <>
      <div ref={div1} className="product-item">
        <div className="product-img">
          <img ref={imgEl} src={item.images[0]} alt="" />
          <span className="product-actions">
            <span className="product-actions-item product-actions-heart">
              <Heart />
              <span className="actions-tooltip">Wishlist</span>
            </span>
            <span className="product-actions-item product-actions-view">
              <View />
              <span className="actions-tooltip">Quick View</span>
            </span>
          </span>
          <span className="product-read-more">
            <Bag /> <span>Read More</span>
          </span>
          {item.status === "" && item.sale === 0 ? (
            <span></span>
          ) : item.status !== "" ? (
            <span
              className={`product-sou-out ${
                item.status.toLocaleUpperCase() === "HOT" ? "hot" : ""
              }`}
            >
              {item.status}
            </span>
          ) : (
            <span className="product-sale">{`-${item.sale}%`}</span>
          )}
        </div>
        <div className="product-info">
          <h3 className="product-name">
            <a href=".">{item.name}</a>
          </h3>
          <p className="product-price">
            {item.sale == 0 ? (
              <span>{`£ ${item.price}`}</span>
            ) : (
              <>
                <span className="price-default">£ {item.price}</span>
                <span className="price-sale">
                  £{" "}
                  {Math.round(
                    (item.price - (item.price * item.sale) / 100) * 100
                  ) / 100}
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
