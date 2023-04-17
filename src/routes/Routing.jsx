import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home.jsx'

const Routing = () => {
  return (
    <BrowserRouter basename="/LuisZapata">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing