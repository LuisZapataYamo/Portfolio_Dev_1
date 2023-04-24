import HeaderBlog from '../HeaderBlog/HeaderBlog.jsx'
import { Outlet } from 'react-router-dom'

const BlogLayout = () => {
  return (
    <div className='blog'>
      <HeaderBlog/>
      <Outlet/>
    </div>
  )
}

export default BlogLayout