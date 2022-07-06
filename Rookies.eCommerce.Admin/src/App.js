import HomePage from './pages/Home'
import ProductPage from './pages/Product'
import BrandPage from './pages/Brand'
import CategoryPage from './pages/Category'
import UserPage from './pages/User'
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='admin-container'>
      <div className="container-fluid">
        <div className="sidebar row">
          <div className="col-3 flex-column flex-shrink-0 p-3 bg-light">
            <h1 className='fw-bold text-center text-primary'>ADMIN</h1>
            <hr/>
            <ul className='nav nav-pills flex-column mb-auto' >
              <li className='nav-item'>
                <NavLink className='nav-link fs-5' to="/Home">Trang chủ</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link fs-5' to="/Product">Quản lý sản phẩm</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link fs-5' to="/Brand">Quản lý thương hiệu</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link fs-5' to="/Category">Quản lý danh mục</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link fs-5' to="/User">Quản lý người dùng</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-9">
            <Routes>
              <Route path='/Home' element={<HomePage />}></Route>
              <Route path='/Product' element={<ProductPage />}></Route>
              <Route path='/Brand' element={<BrandPage />}></Route>
              <Route path='/Category' element={<CategoryPage />}></Route>
              <Route path='/User' element={<UserPage />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
