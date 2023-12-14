import "./lastBlogs.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import { Link } from 'react-router-dom'

const LastBlogsCards = ({createdAt, image, title, description, _id}) => {
  return (
    <div className='lastblogs__cards'>
        <img src={description !== "Sample img" ? image : "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg"} alt={title} />
        <div>
            <small>{createdAt.substring(0, 10)}</small>
            <div>
                <h4>{title}</h4>
                <div className='lastBlogs__footer'>
                  <Link to={`/publicacion/${_id}/detalle`}>
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