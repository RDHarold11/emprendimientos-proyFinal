import React from 'react'
import "./hero.css"
import { GoArrowRight } from "react-icons/go";


const Hero = () => {
  return (
    <main className='main__section'>
        <div className="hero__flex">
            <div className="card__hero">
                <h4 className='hero__title'>Best for you</h4>
                <h2>Conoce los últimos productos agregados a Catalyst</h2>
                <div>
                    <p>Eleva el nivel de tu emprendimiento vendiendolos aqui.</p>
                    <button>Comprar ahora <GoArrowRight size={20}/></button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero