import { useState } from "react";
import "./Direccion.css";
import img1 from "/icono.jpg";
import { useDispatch, useSelector } from "react-redux";
import { saveShipping } from "../../slices/cartSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Direccion = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    navigate("/pago")
    toast.success("Dirección agregada");
  };
  return (
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a
                  href="/home"
                  className="logo d-flex align-items-center w-auto"
                >
                  <img src={img1} alt="" />
                  <span className="d-none d-lg-block">Catalyst</span>
                </a>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      <strong>Introduzca su Dirección</strong>
                    </h5>
                  </div>
                  <form
                    className="row g-3 needs-validation"
                    onSubmit={submitHandler}
                  >
                    <div className="col-12">
                      <label className="form-label">Dirección</label>
                      <input
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        placeholder="Introduzca su direccion"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Ciudad</label>
                      <input
                        className="form-control"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        placeholder="Introduzca su ciudad"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Codigo Postal</label>
                      <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="form-control"
                        placeholder="Introduzca un codigo postal"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Pais</label>
                      <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="form-control"
                        placeholder="Introduzca un pais"
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100">
                        Continuar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Direccion;
