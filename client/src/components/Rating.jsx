import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({value, text}) => {
  return (
    <div className='rating'>
        <span>
        {value >= 1 ? (
          <FaStar color="#FFC436"/>
        ) : value >= 0.5 ? (
          <FaStarHalfAlt color="#FFC436"/>
        ) : (
          <FaRegStar color="#FFC436"/>
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar color="#FFC436"/>
        ) : value >= 1.5 ? (
          <FaStarHalfAlt color="#FFC436"/>
        ) : (
          <FaRegStar color="#FFC436"/>
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar color="#FFC436"/>
        ) : value >= 2.5 ? (
          <FaStarHalfAlt color="#FFC436"/>
        ) : (
          <FaRegStar color="#FFC436"/>
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar color="#FFC436"/>
        ) : value >= 3.5 ? (
          <FaStarHalfAlt color="#FFC436"/>
        ) : (
          <FaRegStar color="#FFC436"/>
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar color="#FFC436"/>
        ) : value >= 4.5 ? (
          <FaStarHalfAlt color="#FFC436"/>
        ) : (
          <FaRegStar color="#FFC436"/>
        )}
      </span>
      <span className="rating-text" style={{marginLeft: "10px"}}>{text && text}</span>
    </div>
  )
}

export default Rating