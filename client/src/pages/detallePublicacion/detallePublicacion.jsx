import "./detallePublicacion.css";
import Comentarios from "../../components/comentarios/comentarios";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";
import { useGetEmprendimientoByIdQuery } from "../../slices/emprendimientosApiSlice";
import { useState } from "react";
import { toast } from "sonner";
import { useCreateReviewMutation } from "../../slices/emprendimientosApiSlice";
import LastBlogs from "../../components/Ultimos Blogs/LastBlogs";

const DetallePublicacionPage = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { data, isLoading, refetch } = useGetEmprendimientoByIdQuery(id);
  const [createReview, { isLoading: loadingReview }] =
    useCreateReviewMutation();

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

  const formattedDescription = {
    __html: data?.description?.replace(/^"(.*)"$/, "$1"),
  };

  if (isLoading || loadingReview) {
    return <Loading />;
  }
  return (
    <>
      <section className="details__container">
        <div>
          <div className="img__container">
            <img
              src={
                data.image !== "Sample img"
                  ? data.image
                  : "https://images.pexels.com/photos/14541415/pexels-photo-14541415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              className="details__img"
            />
          </div>
          <div className="details__content">
            <h2 className="details__title">{data.title}</h2>
            <div className="details__data">
              <small style={{ fontWeight: "bold" }}>Edwin Diaz</small>
              <small>{data.createdAt.substring(0, 10)}</small>
            </div>
            <p dangerouslySetInnerHTML={formattedDescription} />
          </div>
        </div>
      </section>
      <Comentarios
        setRating={setRating}
        setComment={setComment}
        comment={comment}
        rating={rating}
        submitHandler={submitHandler}
        product={data}
      ></Comentarios>
      <LastBlogs />
    </>
  );
};

export default DetallePublicacionPage;
