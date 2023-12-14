import "./product.css";
import { useState } from "react";
import Navbar from "../../../components/Ecommerce/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import "./product.css";
import Comentarios from "../../../components/comentarios/comentarios";
import {
  useGetSingleProductQuery,
  useCreateReviewMutation,
} from "../../../slices/productsApiSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../slices/cartSlice";
import { toast } from "sonner";
import Rating from "../../../components/Rating";
import Loading from "../../../components/Loading";

const ProductDetail = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { data: product, isLoading, refetch } = useGetSingleProductQuery(id);
  const [createReview, { isLoading: loadingProductReview }] =
    useCreateReviewMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createReview({
        id,
        rating,
        comment,
      }).unwrap();
      refetch();
      toast.success("Review creada");
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };
  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    toast.success("Agregado al carrito");
    navigate("/carrito");
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar></Navbar>
      {loadingProductReview && <Loading />}
      <section className="product__details">
        <div className="container__ecommerce">
          <div className="product__flex">
            <div className="product__img">
              <img src={product.image ? product.image : "https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={product.name} />
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
      <Comentarios
        product={product}
        setComment={setComment}
        comment={comment}
        rating={rating}
        setRating={setRating}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default ProductDetail;
