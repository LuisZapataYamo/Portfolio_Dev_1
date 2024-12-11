import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home.jsx'
import BlogLayout from '../components/Blog/BlogLayout/BlogLayout.jsx'
import BlogHome from '../components/Blog/BlogHome/BlogHome.jsx'
import Article from '../components/Blog/Article/Article.jsx'
import SearchList from '../components/Blog/SearchList/SearchList.jsx'

const Routing = () => {
  return (
    <BrowserRouter basename='/Portfolio_Dev_1/'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route element={<BlogLayout />}>
          <Route path='/blog/' element={<BlogHome />} />
          <Route path='/blog/article/:id' element={<Article />} />
          <Route path='/blog/articles/' element={<SearchList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
