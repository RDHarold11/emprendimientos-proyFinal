import React from 'react'
import "./lastBlogs.css"
import LastBlogsCards from './LastBlogsCards'

const LastBlogs = () => {
  return (
    <section className='last__container'>
        <h2>Nuestros Ultimos Blogs</h2>
        <div className='last__cards-container'>
            <LastBlogsCards/>
            <LastBlogsCards/>
            <LastBlogsCards/>
            <LastBlogsCards/>
        </div>
    </section>
  )
}

export default LastBlogs