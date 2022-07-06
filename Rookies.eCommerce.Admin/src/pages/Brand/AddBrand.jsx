import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

export default function AddBrand() {
  return (
    <div>
      {/* <Outlet />
      <Routes>
        <Route path='AddBrand' element={<AddBrand />} />
      </Routes> */}
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h2>Thêm thương hiệu</h2>
      </div>
    </div>
  )
}
