import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Carts from './pages/Carts/Carts'
import Detail from './pages/Detail/Detail'
import Search from './pages/Search/Search'
import Profile from './pages/Profile/Profile'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />} >
          <Route index  element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/carts' element={<Carts />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/search' element={<Search />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
