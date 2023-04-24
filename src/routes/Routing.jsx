import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home.jsx'
import BlogLayout from '../components/Blog/BlogLayout/BlogLayout.jsx'
import BlogHome from '../components/Blog/BlogHome/BlogHome.jsx'

const Routing = () => {
  return (
    <BrowserRouter basename="/LuisZapata/">
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route element={<BlogLayout/>}>
          <Route path='/blog/' element={<BlogHome/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing