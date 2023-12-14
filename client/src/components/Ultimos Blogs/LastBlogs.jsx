import React from 'react'
import "./lastBlogs.css"
import LastBlogsCards from './LastBlogsCards'
import { useGetLastFourQuery } from '../../slices/emprendimientosApiSlice'
import Loading from "../Loading"

const LastBlogs = () => {
  const {data, isLoading} = useGetLastFourQuery()

  if(isLoading){
    return <Loading/>
  }

  return (
    <section className='last__container'>
        <h2>Nuestros Ultimos Blogs</h2>
        <div className='last__cards-container'>
          {
            data.map((item) => (
              <LastBlogsCards key={item._id} {...item}/>
            ))
          }
        </div>
    </section>
  )
}

export default LastBlogs