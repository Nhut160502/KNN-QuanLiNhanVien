import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import './index.scss'

import axiosInterceptor from './utils/interceptors'
import DefaultLayout from './layout/DefaultLayout'

axiosInterceptor()

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
