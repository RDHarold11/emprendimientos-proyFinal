import "./best.css";
import { LuShoppingBag } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Rating from "../../Rating";

const BestSellerCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="card__ecommerce card__container">
      <div>
        <img
          style={{ width: "250px", height: "250px" }}
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className="card__content">
        <Rating value={item.rating} />
        <h3 className="card__title">{item.name}</h3>
        <p>${item.price}</p>
      </div>
      <div className="tarjeta">
        <h6>New</h6>
      </div>
      <div className="details__card">
        <div>
          <LuShoppingBag size={25} color="#fff" />
        </div>
        <div>
          <CiHeart size={25} color="#fff" />
        </div>
        <div onClick={() => navigate(`/producto/${item._id}/detalle`)}>
          <FiEye size={25} color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
