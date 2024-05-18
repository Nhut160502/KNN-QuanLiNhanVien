import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import './index.scss'

import axiosInterceptor from './utils/interceptors'
import DefaultLayout from './layout/DefaultLayout'
import Login from './pages/Login'

axiosInterceptor()

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<DefaultLayout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
