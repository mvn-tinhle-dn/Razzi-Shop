import * as React from "react";
import ProductItem from "./ProductItem";

export interface product {
  name: string;
  images: ["", ""];
  price: number;
  id: string;
  sale: number;
  status: string;
}

export default function ProductList() {
  const [products, setProducts] = React.useState<Array<product>>();

  //Get API
  async function getData() {
    try {
      const res = await fetch(
        "https://62fc8d77b9e38585cd4104f8.mockapi.io/razzishop"
      );
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="product-list row">
        {products?.map((item) => {
          return (
            <div
              key={item.id}
              className="col-3 col-wide-4 col-medium-6 col-small-6 col-mini-12"
            >
              <ProductItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
