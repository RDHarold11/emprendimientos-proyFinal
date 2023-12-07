import React from "react";
import BestSellerCard from "./BestSellerCard";
import "./best.css";
import { useSelectTopProductsQuery } from "../../../slices/productsApiSlice";

const BestSellers = () => {
  const { data, isLoading } = useSelectTopProductsQuery();

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }
  return (
    <section className="bestSeller__container">
      {/*       <div className="ecommerce__img-container">
        <img src="/ecommerce/11.png" alt="" />
      </div> */}
      <div className="container__ecommerce">
        <div className="ecommerce__header">
          <h2>Los más vendidos</h2>
        </div>
        <div className="ecommerce__flex">
          {data.map((item) => {
            return <BestSellerCard key={item._id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
