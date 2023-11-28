import "./product.css";
import { useEffect } from "react";
import Navbar from "../../../components/Ecommerce/Navbar/Navbar";
import { useParams } from "react-router-dom";
import "./product.css";
import Comentarios from "../../../components/comentarios/comentarios";

const ProductDetail = () => {
  const { id } = useParams();
  const inStock = true;

  return (
    <>
      <Navbar></Navbar>
      <section className="product__details">
        <div className="container__ecommerce">
          <div className="product__flex">
            <div className="product__img">
              <img
                src="https://demo73leotheme.b-cdn.net/prestashop/leo_olars_demo/33-large_default/brown-bear-printed-sweater.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="detail__top">
                <h3 className="product__title">Hummingbird Printed Sweater</h3>
                <p>Read Reviews (1)</p>
                <h4>$28.72</h4>
              </div>
              <div className="detail__bottom">
                <p>
                  Regular fit, round neckline, long sleeves. 100% cotton,
                  brushed inner side for extra comfort.
                </p>
                <div className="bottom__btns">
                  {inStock ? (
                    <>
                      <select className="bottom__select">
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                      </select>
                      <button>Add to Cart</button>
                    </>
                  ) : (
                    <h2>No Stock</h2>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Comentarios />
    </>
  );
};

export default ProductDetail;
