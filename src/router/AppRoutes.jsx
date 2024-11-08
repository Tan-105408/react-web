import React from 'react'
import { BrowserRouter as MainRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Sorry from '../pages/login/sorry/Sorry'
import Register from '../pages/register/Register'
function AppRoutes() {
  return (
    <MainRouter >
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sorry" element={<Sorry />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </MainRouter>
  )
}

export default AppRoutes;