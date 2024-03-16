import React from 'react'
import "./detalles.css"

const Detalles = () => {
  return (
    <section className='detalles__section' name="informacion">
      <div className="container__ecommerce">
        <div className="ecommerce__flex detalles__card">
          <div className='detalles__content'>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0905/2012/files/oic-5.png?v=1626772786" alt="" />
            </div>
            <h4>Paquetes seguros</h4>
            <small>Paquetes doblemente empacados</small>
          </div>
          <div className='detalles__content'>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0905/2012/files/oic-6.png?v=1626772786" alt="" />
            </div>
            <h4>Envíos gratis</h4>
            <small>Ordenes superiores a 100 dolares</small>
          </div>
          <div className='detalles__content'>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0905/2012/files/oic-7.png?v=1626772786" alt="" />
            </div>
            <h4>Suporte todo el día</h4>
            <small>Contactanos por nuestras vías</small>
          </div>
          <div className='detalles__content'>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0905/2012/files/oic-8.png?v=1626772786" alt="" />
            </div>
            <h4>Checkout seguro</h4>
            <small>100% protegido por PayPal</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detalles