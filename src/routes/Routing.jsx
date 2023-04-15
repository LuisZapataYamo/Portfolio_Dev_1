import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout.jsx'
import Home from '../components/Home/Home.jsx'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing