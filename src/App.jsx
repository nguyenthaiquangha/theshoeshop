import { Suspense, lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
// import Home from './pages/Home/Home'
// import Login from './pages/Login/Login'
// import Register from './pages/Register/Register'
// import Carts from './pages/Carts/Carts'
// import Detail from './pages/Detail/Detail'
// import Search from './pages/Search/Search'
// import Profile from './pages/Profile/Profile'


const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Detail = lazy(() => import('./pages/Detail/Detail'));
const Carts = lazy(() => import('./pages/Carts/Carts'));
const Search = lazy(() => import('./pages/Search/Search'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
 
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeTemplate />} >
          <Route index  element={<Home />  } />
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
