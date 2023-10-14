// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const CrearProducto = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // TODO: Implement submission logic (e.g., API call to create a product)
    console.log(data);
  };

  return (
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      <strong>Crear Producto</strong>
                    </h5>
                    <p className="text-center small">
                      Introduzca los detalles del producto
                    </p>
                  </div>
                  <form
                    className="row g-3 needs-validation"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="col-12">
                      <label className="form-label" htmlFor="name">
                        Nombre del producto:
                      </label>
                      <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            className="form-control"
                            type="text"
                            id="name"
                            {...field}
                          />
                        )}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="image">
                        URL de la imagen:
                      </label>
                      <Controller
                        name="image"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            className="form-control"
                            type="text"
                            id="image"
                            {...field}
                          />
                        )}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="category">
                        Categoría:
                      </label>
                      <Controller
                        name="category"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            className="form-control"
                            type="text"
                            id="category"
                            {...field}
                          />
                        )}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="description">
                        Descripción:
                      </label>
                      <Controller
                        name="description"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            {...field}
                          ></textarea>
                        )}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="price">
                        Precio:
                      </label>
                      <Controller
                        name="price"
                        control={control}
                        defaultValue={0}
                        render={({ field }) => (
                          <input
                            className="form-control"
                            type="number"
                            id="price"
                            {...field}
                          />
                        )}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="countInStock">
                        Cantidad en stock:
                      </label>
                      <Controller
                        name="countInStock"
                        control={control}
                        defaultValue={0}
                        render={({ field }) => (
                          <input
                            className="form-control"
                            type="number"
                            id="countInStock"
                            {...field}
                          />
                        )}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100"
                        type="submit"
                      >
                        Crear Producto
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

export default CrearProducto;
