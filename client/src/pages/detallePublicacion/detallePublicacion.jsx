import "./detallePublicacion.css";
import { useSelector } from "react-redux";
import Comentarios from "../../components/comentarios/comentarios";

const DetallePublicacionPage = () => {
  return (
    <>
      <section className="details__container">
        <div>
          <div className="img__container">
            <img
              src="https://images.pexels.com/photos/14541415/pexels-photo-14541415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="details__img"
            />
          </div>
          <div className="details__content">
            <h2 className="details__title">¿Cómo empezar tu negocio?</h2>
            <div className="details__data">
              <small style={{ fontWeight: "bold" }}>Edwin Diaz</small>
              <small>15/11/2023</small>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolorum fugit suscipit, quidem distinctio voluptatem,
              quia ab veniam, aperiam quis corporis. Quidem ipsa totam odio ex
              inventore minus aut tempore sit animi cum porro et dolore enim
              architecto ab, quaerat repellat eius obcaecati neque quam fugiat
              ducimus similique ad non? Tempore doloremque beatae est sed
              laudantium veritatis iusto, assumenda harum vitae delectus dicta!
              Commodi voluptates vel magnam totam eligendi, ea dignissimos,
              nulla non eos suscipit dolorem placeat mollitia voluptatum,
              corporis atque a eaque dolorum? Harum expedita illum voluptas
              reprehenderit omnis, quis repellendus quo veritatis debitis
              corporis eius exercitationem ex minima quia quas modi enim.
              Aperiam repudiandae quisquam reprehenderit vero odio natus
              assumenda quae maxime voluptatum voluptas adipisci, aspernatur
              dolorum eius, sit harum ut. Beatae illum in, delectus vero, eius
              obcaecati aperiam quidem alias fugit architecto ullam maiores
              voluptate. Cupiditate quia dicta eum libero perferendis rem
              possimus eligendi laudantium dignissimos hic iure error doloribus
              ipsum cumque, autem fuga ducimus delectus eius optio ratione cor
              tempora exercitatioe officia incidunt eum assumenda vitae
              cupiditate possimus quasi hic deleniti dolores sed quaerat ut
              rerum ad quae sint culpa molestias soluta ullam, commodi
              accusantium ratione. Est nesciunt nisi voluptatum inventore ut
              quasi vel, maiores totam reiciendis aperiam adipisci sed quia
              laboriosam maximumquam quas hic aut at illo? Neque omnis, vero
              repellat enim nihil fugiat est ad eligendi, pariatur quos
              blanditiis porro quo error inventore ducimus voluptatibus esse
              officia perferendis modi. Sed dicta, magnam mollitia vero
              perspiciatis, officiis eius corporis expedita quam veniam
              temporibus reiciendis tempore. Fuga iusto odit voluptatum tempore
              ea asperiores fugiat animi perspiciatis, rerum quasi dolores
              vitae, sed ad recusandae totam earum quidem rem ex culpa dolor
              deserunt? Exercitationem, quas repellat. Illum, porro. Aliquid
              deleniti a quis perspiciatis ipsum nobis quam dolorum ducimus
              reprehenderit nemo labore, eligendi dolore aspernatur obcaecati
              unde quibusdam, ex atque magnam accusantium voluptatibus
              blanditiis voluptate aperiam iusto impedit? Dolores numquam
              laudantium, doloremque velit dolorem repellat ut expedita.
              Architecto cupiditate accusantium, ea animi debitis dicta
              excepturi quae sapiente repudiandae.
            </p>
          </div>
        </div>
      </section>
      <Comentarios></Comentarios>
    </>
  );
};

export default DetallePublicacionPage;
