import React from "react";
import BestSellerCard from "./BestSellerCard";
import "./best.css";

const BestSellers = () => {
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
          <BestSellerCard />
          <BestSellerCard />
          <BestSellerCard />
          <BestSellerCard />
          <BestSellerCard />
          <BestSellerCard />
          <BestSellerCard />
          <BestSellerCard />
          <BestSellerCard />
          <BestSellerCard />
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
