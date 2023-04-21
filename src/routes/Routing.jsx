import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home.jsx'

const Routing = () => {
  return (
    <BrowserRouter basename="/LuisZapata">
      <Routes>
        <Route index path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing