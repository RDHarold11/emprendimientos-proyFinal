import "./lastBlogs.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import { Link } from 'react-router-dom'

const LastBlogsCards = () => {
  return (
    <div className='lastblogs__cards'>
        <img src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg" alt="" />
        <div>
            <small>15 May, 2020</small>
            <div>
                <h4>Cómo empezar tu negocio</h4>
                <div className='lastBlogs__footer'>
                  <Link to="/publicacion/2/detalle">
                    <p>Leer más</p>
                    <AiOutlineArrowRight color='#371bc5'/>
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LastBlogsCards