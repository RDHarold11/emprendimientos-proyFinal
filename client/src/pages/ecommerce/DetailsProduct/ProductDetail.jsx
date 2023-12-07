import "./product.css";
import { useState } from "react";
import Navbar from "../../../components/Ecommerce/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import "./product.css";
import Comentarios from "../../../components/comentarios/comentarios";
import { useGetSingleProductQuery } from "../../../slices/productsApiSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../slices/cartSlice";
import { toast } from "sonner";
import Rating from "../../../components/Rating";

const ProductDetail = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const { data: product, isLoading } = useGetSingleProductQuery(id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    toast.success("Agregado al carrito");
    navigate("/carrito");
  };

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }
  return (
    <>
      <Navbar></Navbar>
      <section className="product__details">
        <div className="container__ecommerce">
          <div className="product__flex">
            <div className="product__img">
              <img src={product?.image} alt={product?.name} />
            </div>
            <div>
              <div className="detail__top">
                <h3 className="product__title">{product?.name}</h3>
                <div>
                  <Rating
                    value={product?.rating}
                    text={`${product?.numReviews} reviews`}
                  />
                </div>
                <h4>${product?.price}</h4>
              </div>
              <div className="detail__bottom">
                <p>{product?.description}</p>
                <div className="bottom__btns">
                  {product?.countInStock > 0 ? (
                    <>
                      <select
                        className="bottom__select"
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option value={x + 1} key={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      <button
                        disabled={product?.countInStock === 0}
                        onClick={addToCartHandler}
                      >
                        Add to Cart
                      </button>
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
